import { useState, useEffect, useCallback } from 'react';
import { getApiBase } from '../lib/api';
import type { AuthUser } from '../types/auth';
import {
  authFetchHeaders,
  consumeSessionTokenFromHash,
  setStoredSessionToken,
} from '../lib/authToken';

export function useAuthUser() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const apiBase = getApiBase();

  useEffect(() => {
    consumeSessionTokenFromHash();
    let cancelled = false;
    setLoading(true);
    const headers: HeadersInit = { ...authFetchHeaders() };
    void fetch(`${apiBase}/api/auth/me`, {
      credentials: 'include',
      headers,
    })
      .then((r) => r.json())
      .then((data: { user: AuthUser | null }) => {
        if (!cancelled) setUser(data.user ?? null);
      })
      .catch(() => {
        if (!cancelled) setUser(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [apiBase]);

  const signOut = useCallback(async () => {
    const headers: HeadersInit = { ...authFetchHeaders() };
    try {
      await fetch(`${apiBase}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
        headers,
      });
    } finally {
      setStoredSessionToken(null);
      setUser(null);
    }
  }, [apiBase]);

  return { user, loading, signOut, setUser };
}
