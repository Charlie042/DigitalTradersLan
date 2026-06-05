import type { ApiError } from './types'

function toApiError(e: unknown): ApiError {
  if (typeof e === 'object' && e !== null) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anyErr = e as any
    const status =
      typeof anyErr?.response?.status === 'number'
        ? anyErr.response.status
        : typeof anyErr?.status === 'number'
          ? anyErr.status
          : undefined
    const message =
      typeof anyErr?.response?.data?.error === 'string'
        ? anyErr.response.data.error
        : typeof anyErr?.response?.data?.message === 'string'
          ? anyErr.response.data.message
          : typeof anyErr?.message === 'string'
            ? anyErr.message
            : undefined
    return { status, message, raw: anyErr }
  }
  return { raw: e }
}

export async function FETCHER<T>(
  fn: () => Promise<T>,
  opts?: {
    onUnauthorized?: () => void
  },
): Promise<T> {
  try {
    return await fn()
  } catch (e) {
    const err = toApiError(e)
    if (err.status === 401) opts?.onUnauthorized?.()
    throw err
  }
}

