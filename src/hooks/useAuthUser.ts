import { useCallback } from 'react'
import type { AuthUser } from '../types/auth'
import { useAuthMe } from '@/services/api/hooks'
import { getApiBase } from '@/lib/api'

export function useAuthUser() {
  const me = useAuthMe()
  const user = (me.data?.data.user as AuthUser | null | undefined) ?? null
  const loading = me.isLoading

  const signOut = useCallback(async () => {
    const apiBase = getApiBase()
    await fetch(`${apiBase}/api/auth/logout`, { method: 'POST', credentials: 'include' })
  }, [])

  return { user, loading, signOut }
}
