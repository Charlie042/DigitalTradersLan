import type { Request } from 'express';
import { SignJWT, jwtVerify } from 'jose';

const COOKIE_NAME = 'session';

function getSecret(): Uint8Array {
  const raw = process.env.SESSION_SECRET;
  if (!raw || raw.length < 16) {
    throw new Error('SESSION_SECRET must be set and at least 16 characters.');
  }
  return new TextEncoder().encode(raw);
}

export type SessionPayload = {
  sub: string;
  email: string;
};

export async function signSessionToken(payload: SessionPayload): Promise<string> {
  return new SignJWT({ email: payload.email })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(getSecret());
}

export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret(), { algorithms: ['HS256'] });
    const sub = typeof payload.sub === 'string' ? payload.sub : null;
    const email = typeof payload.email === 'string' ? payload.email : null;
    if (!sub || !email) return null;
    return { sub, email };
  } catch {
    return null;
  }
}

export { COOKIE_NAME };

/** Session JWT from the cookie, falling back to an `Authorization: Bearer <jwt>` header. */
function getSessionTokenFromRequest(req: Request): string | null {
  const cookieToken = req.cookies?.[COOKIE_NAME];
  if (typeof cookieToken === 'string' && cookieToken) return cookieToken;

  const header = req.headers.authorization;
  if (typeof header === 'string' && header.startsWith('Bearer ')) {
    const bearer = header.slice('Bearer '.length).trim();
    if (bearer) return bearer;
  }

  return null;
}

/** Numeric user id from the signed session (cookie or Bearer header). Matches `users.id` serial. */
export async function getSessionUserIdFromRequest(req: Request): Promise<number | null> {
  const token = getSessionTokenFromRequest(req);
  if (!token) return null;
  const payload = await verifySessionToken(token);
  if (!payload) return null;
  const id = Number.parseInt(payload.sub, 10);
  return Number.isFinite(id) ? id : null;
}
