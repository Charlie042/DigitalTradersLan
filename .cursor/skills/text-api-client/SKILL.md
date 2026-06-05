---
name: text-api-client
description: Standard way to call the Text backend API using Axios + TanStack React Query hooks. Use when adding a new API call, using useQuery/useMutation, integrating with /api/* endpoints, or when you need consistent query keys, typing, and cookie-based session auth via /api/auth/me.
---

# Text API client (React Query)

## Canonical location

Use the shared client layer in `src/services/api/`:
- `src/services/api/network.ts`: Axios instance (`withCredentials: true`) + baseURL via `getApiBase()`
- `src/services/api/requests.ts`: low-level request helpers
- `src/services/api/hooks.ts`: `useApiGet`, `useApiPost`, `useApiPatch`, `useApiPut`, `useApiDelete`, `useApiGetInfinite`, `useApiBlob`
- `src/services/api/fetcher.ts`: wraps requests and normalizes thrown errors

Do not create ad-hoc `fetch(...)` or new Axios instances elsewhere unless there is a strong reason.

## Auth + session rules (this repo)

- The backend uses an **httpOnly cookie session** (`session`) and expects requests to include cookies.
- Always call the API with `withCredentials: true` (already set in `network.ts`).
- Use `GET /api/auth/me` to determine signed-in state in the client.
- By default, queries created via `useApiGet` / `useApiGetInfinite` are **auth-gated** (they only run when `/api/auth/me` returns a user). To bypass, pass `{ requireAuth: false }`.

## How to add a new endpoint call

### 1) Decide the route and types

- Route should be under `/api/*` (e.g. `/api/catalog/topics`).
- Define types for request params/body and response payload.

### 2) Use the canonical hooks

#### GET

```ts
import { useApiGet } from '@/services/api/hooks'

type TopicsParams = { q?: string }
type TopicsResponse = { topics: Array<{ id: number; name: string }> }

export function useTopics(params: TopicsParams) {
  return useApiGet<TopicsParams, TopicsResponse>(
    { url: '/api/catalog/topics', data: params },
    { queryKey: ['catalog', 'topics', params] as const },
  )
}
```

#### POST / PATCH / PUT / DELETE

```ts
import { useApiPost } from '@/services/api/hooks'

type WaitlistBody = { email: string }
type WaitlistResponse = { ok: true }

export function useJoinWaitlist() {
  return useApiPost<WaitlistBody, WaitlistResponse>()
}

// usage:
// const join = useJoinWaitlist()
// join.mutate({ url: '/api/waitlist', data: { email } })
```

#### POST multipart/form-data (uploads)

Use `useApiPostForm` with a `FormData` body.

## Query keys (required)

- Use stable, structured keys: `['catalog', 'topics', params] as const`
- Never use random strings; do not include non-serializable values in keys.

## Error handling (required)

- Requests throw an `ApiError` from `src/services/api/types.ts`.
- Treat `status === 401` as “signed out”; use `useAuthMe()` to drive UI state.

