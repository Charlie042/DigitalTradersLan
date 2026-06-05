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

/** Numeric user id from signed session cookie (matches `users.id` serial). */
export async function getSessionUserIdFromRequest(req: Request): Promise<number | null> {
  const token = req.cookies?.[COOKIE_NAME];
  if (!token || typeof token !== 'string') return null;
  const payload = await verifySessionToken(token);
  if (!payload) return null;
  const id = Number.parseInt(payload.sub, 10);
  return Number.isFinite(id) ? id : null;
}
