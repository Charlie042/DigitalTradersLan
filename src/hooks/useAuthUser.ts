import { useState, useEffect, useCallback } from 'react';
import { getApiBase } from '../lib/api';
import type { AuthUser } from '../types/auth';

export function useAuthUser() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const apiBase = getApiBase();

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    void fetch(`${apiBase}/api/auth/me`, { credentials: 'include' })
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
    try {
      await fetch(`${apiBase}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } finally {
      setUser(null);
    }
  }, [apiBase]);

  return { user, loading, signOut, setUser };
}
