import type { AuthUser } from '../types/auth';

/** First name for greeting, or local part of email, or fallback. */
export function displayFirstName(user: AuthUser | null, fallback = 'Trader'): string {
  if (!user) return fallback;
  const fromName = user.name?.trim();
  if (fromName) {
    const first = fromName.split(/\s+/)[0];
    if (first) return first;
  }
  const local = user.email?.split('@')[0];
  if (local) return local;
  return fallback;
}

export function avatarInitial(user: AuthUser | null): string {
  if (!user) return '?';
  const fromName = user.name?.trim();
  if (fromName) return fromName[0]!.toUpperCase();
  const local = user.email?.split('@')[0];
  if (local) return local[0]!.toUpperCase();
  return '?';
}

export function greetingTimeLabel(): string {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}
