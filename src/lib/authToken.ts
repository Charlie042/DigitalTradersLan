const STORAGE_KEY = 'dtl_session_token';

export function getStoredSessionToken(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function setStoredSessionToken(token: string | null): void {
  try {
    if (token) {
      localStorage.setItem(STORAGE_KEY, token);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    /* ignore */
  }
}

/** After OAuth, the API redirects here with #session=<jwt>. Persist and strip from the URL. */
export function consumeSessionTokenFromHash(): void {
  if (typeof window === 'undefined') return;
  const { hash } = window.location;
  if (!hash || hash.length < 10) return;
  const params = new URLSearchParams(hash.startsWith('#') ? hash.slice(1) : hash);
  const token = params.get('session');
  if (!token) return;
  setStoredSessionToken(token);
  const url = new URL(window.location.href);
  url.hash = '';
  window.history.replaceState({}, '', url.pathname + url.search);
}

export function authFetchHeaders(): HeadersInit {
  const t = getStoredSessionToken();
  if (!t) return {};
  return { Authorization: `Bearer ${t}` };
}
