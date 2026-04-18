import { Router, Request, Response } from 'express';
import crypto from 'node:crypto';
import { eq } from 'drizzle-orm';
import { db } from '../db/index.js';
import { users } from '../db/schema.js';
import { COOKIE_NAME, signSessionToken, verifySessionToken } from '../lib/session.js';
import { getOAuth2Client, GOOGLE_SCOPES } from '../lib/googleOAuth.js';

const router = Router();

const STATE_COOKIE = 'oauth_state';

function frontendBase(): string {
  return (process.env.FRONTEND_URL || 'http://localhost:5173').replace(/\/$/, '');
}

function sessionCookieOptions() {
  const secure = process.env.NODE_ENV === 'production';
  return {
    httpOnly: true,
    secure,
    sameSite: 'lax' as const,
    path: '/',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };
}

function stateCookieOptions() {
  const secure = process.env.NODE_ENV === 'production';
  return {
    httpOnly: true,
    secure,
    sameSite: 'lax' as const,
    path: '/',
    maxAge: 10 * 60 * 1000,
  };
}

function clearCookieOptions() {
  const secure = process.env.NODE_ENV === 'production';
  return {
    httpOnly: true,
    secure,
    sameSite: 'lax' as const,
    path: '/',
  };
}

async function getSessionUserId(req: Request): Promise<number | null> {
  const token = req.cookies?.[COOKIE_NAME];
  if (!token || typeof token !== 'string') return null;
  const payload = await verifySessionToken(token);
  if (!payload) return null;
  const id = Number.parseInt(payload.sub, 10);
  return Number.isFinite(id) ? id : null;
}

router.get('/google', (_req: Request, res: Response) => {
  try {
    const oauth2Client = getOAuth2Client();
    const state = crypto.randomBytes(24).toString('hex');
    res.cookie(STATE_COOKIE, state, stateCookieOptions());
    const url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: GOOGLE_SCOPES,
      prompt: 'consent',
      state,
      include_granted_scopes: true,
    });
    res.redirect(302, url);
  } catch (e) {
    console.error('[auth/google]', e);
    res.status(500).send('OAuth is not configured. Set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI.');
  }
});

router.get('/google/callback', async (req: Request, res: Response) => {
  const base = frontendBase();
  const fail = (reason: string) => {
    res.redirect(302, `${base}/?auth=error&reason=${encodeURIComponent(reason)}`);
  };

  const code = typeof req.query.code === 'string' ? req.query.code : null;
  const state = typeof req.query.state === 'string' ? req.query.state : null;
  const cookieState = req.cookies?.[STATE_COOKIE];

  res.clearCookie(STATE_COOKIE, clearCookieOptions());

  if (!code || !state || state !== cookieState) {
    fail('invalid_state');
    return;
  }

  try {
    const oauth2Client = getOAuth2Client();
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const accessToken = tokens.access_token;
    if (!accessToken) {
      fail('no_access_token');
      return;
    }

    const profileRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!profileRes.ok) {
      fail('profile_failed');
      return;
    }
    const profile = (await profileRes.json()) as {
      sub: string;
      email?: string;
      name?: string;
      picture?: string;
    };

    if (!profile.sub || !profile.email) {
      fail('incomplete_profile');
      return;
    }

    const googleSub = profile.sub;
    const email = profile.email;
    const name = profile.name ?? null;
    const picture = profile.picture ?? null;
    const refreshToken = tokens.refresh_token ?? null;

    const existing = await db
      .select()
      .from(users)
      .where(eq(users.googleSub, googleSub))
      .limit(1);

    let userId: number;

    if (existing.length > 0) {
      userId = existing[0].id;
      await db
        .update(users)
        .set({
          email,
          name,
          picture,
          ...(refreshToken ? { googleRefreshToken: refreshToken } : {}),
          updatedAt: new Date(),
        })
        .where(eq(users.id, userId));
    } else {
      const [inserted] = await db
        .insert(users)
        .values({
          googleSub,
          email,
          name,
          picture,
          googleRefreshToken: refreshToken,
        })
        .returning({ id: users.id });
      userId = inserted.id;
    }

    const sessionToken = await signSessionToken({
      sub: String(userId),
      email,
    });
    res.cookie(COOKIE_NAME, sessionToken, sessionCookieOptions());
    res.redirect(302, `${base}/dashboard`);
  } catch (e) {
    console.error('[auth/google/callback]', e);
    fail('server_error');
  }
});

router.get('/me', async (req: Request, res: Response) => {
  const userId = await getSessionUserId(req);
  if (userId === null) {
    res.status(401).json({ user: null });
    return;
  }

  const rows = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  if (rows.length === 0) {
    res.clearCookie(COOKIE_NAME, clearCookieOptions());
    res.status(401).json({ user: null });
    return;
  }

  const u = rows[0];
  res.json({
    user: {
      id: u.id,
      email: u.email,
      name: u.name,
      picture: u.picture,
      hasGoogleRefreshToken: Boolean(u.googleRefreshToken),
    },
  });
});

router.post('/google/refresh', async (req: Request, res: Response) => {
  const userId = await getSessionUserId(req);
  if (userId === null) {
    res.status(401).json({ error: 'Not signed in.' });
    return;
  }

  const rows = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  if (rows.length === 0) {
    res.status(401).json({ error: 'User not found.' });
    return;
  }

  const refreshToken = rows[0].googleRefreshToken;
  if (!refreshToken) {
    res.status(400).json({
      error: 'No refresh token stored. Sign out and sign in with Google again (use prompt consent).',
    });
    return;
  }

  try {
    const oauth2Client = getOAuth2Client();
    oauth2Client.setCredentials({ refresh_token: refreshToken });
    const { credentials } = await oauth2Client.refreshAccessToken();
    const accessToken = credentials.access_token;
    const expiry = credentials.expiry_date;
    if (!accessToken) {
      res.status(500).json({ error: 'Could not refresh access token.' });
      return;
    }
    res.json({
      accessToken,
      expiresAt: expiry ?? null,
    });
  } catch (e) {
    console.error('[auth/google/refresh]', e);
    res.status(500).json({ error: 'Failed to refresh Google access token.' });
  }
});

router.post('/logout', (_req: Request, res: Response) => {
  res.clearCookie(COOKIE_NAME, clearCookieOptions());
  res.json({ ok: true });
});

export default router;
