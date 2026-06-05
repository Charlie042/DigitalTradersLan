import type { AxiosResponse } from 'axios'
import {
  keepPreviousData,
  useInfiniteQuery,
  type QueryFunctionContext,
  useMutation,
  useQuery,
  type UseInfiniteQueryOptions,
  type UseMutationOptions,
  type UseQueryOptions,
} from '@tanstack/react-query'

import { FETCHER } from './fetcher'
import { deleteRequest, getFileRequest, getRequest, patchRequest, postFormRequest, postRequest, putRequest } from './requests'
import type { ApiError, RequestType } from './types'

export const authQueryKey = ['auth', 'me'] as const

export type AuthMeResponse = {
  user: null | {
    id: number
    email: string
    name: string | null
    picture: string | null
    hasGoogleRefreshToken: boolean
  }
}

export function useAuthMe<TSelectedData = AxiosResponse<AuthMeResponse>>(
  options?: Omit<
    UseQueryOptions<AxiosResponse<AuthMeResponse>, ApiError, TSelectedData, typeof authQueryKey>,
    'queryKey' | 'queryFn'
  >,
) {
  return useQuery({
    queryKey: authQueryKey,
    queryFn: () =>
      FETCHER(() => getRequest<undefined, AuthMeResponse>({ url: '/api/auth/me', data: undefined })),
    select: options?.select,
    ...options,
  })
}

function useIsAuthenticated() {
  const me = useAuthMe({
    // Do not spam refetches; callers can opt-in per query if needed.
    staleTime: 30_000,
    gcTime: 5 * 60_000,
  })
  return me.data?.data.user != null
}

const useReturnQueryOptionMutation = <
  TVariables,
  TData = unknown,
  TError = ApiError,
  TContext = unknown,
>(
  { fn }: { fn: (request: RequestType<TVariables>) => Promise<AxiosResponse<TData>> },
  mutationOptions?: UseMutationOptions<AxiosResponse<TData>, TError, RequestType<TVariables>, TContext>,
) => {
  return {
    mutationFn: (data: RequestType<TVariables>) => FETCHER(() => fn(data)),
    ...mutationOptions,
  }
}

const useReturnInfiniteQueryOption = <
  TPayload,
  TData,
  TError,
  TSelectedData,
  TQueryKey extends readonly unknown[],
  TPageParam = number,
>(
  {
    params,
    fn,
    requireAuth,
  }: {
    params: RequestType<TPayload>
    fn: (request: RequestType<TPayload>) => Promise<AxiosResponse<TData>>
    requireAuth?: boolean
  },
  queryOptions: UseInfiniteQueryOptions<AxiosResponse<TData>, TError, TSelectedData, TQueryKey, TPageParam>,
) => {
  const isAuthed = useIsAuthenticated()
  const enabledByCaller = queryOptions.enabled ?? true
  const enabled = enabledByCaller && (requireAuth ? isAuthed : true)
  return {
    queryFn: (ctx: QueryFunctionContext<TQueryKey, TPageParam>) => {
      const page = (ctx.pageParam ?? 1) as unknown as number
      const base = params?.data && typeof params.data === 'object' ? params.data : ({} as Record<string, unknown>)
      const requestParams = { ...(base as Record<string, unknown>), page } as unknown as TPayload
      return FETCHER(() => fn({ ...params, data: requestParams }))
    },
    placeholderData: keepPreviousData,
    enabled,
    ...queryOptions,
  }
}

export const useApiGetInfinite = <
  TParams,
  TSelectedData = unknown,
  TResponse = TSelectedData,
  TError = ApiError,
  TQueryKey extends readonly unknown[] = readonly unknown[],
  TPageParam = number,
>(
  params: RequestType<TParams>,
  options: UseInfiniteQueryOptions<AxiosResponse<TResponse>, TError, TSelectedData, TQueryKey, TPageParam> & {
    requireAuth?: boolean
  },
) =>
  useInfiniteQuery(
    useReturnInfiniteQueryOption<TParams, TResponse, TError, TSelectedData, TQueryKey, TPageParam>(
      { params, fn: (req) => getRequest<TParams, TResponse>(req), requireAuth: options.requireAuth ?? true },
      options,
    ),
  )

const useReturnQueryOptionQuery = <
  TParams,
  TResponse,
  TError,
  TSelectedData,
  TQueryKey extends readonly unknown[],
>(
  {
    params,
    fn,
    requireAuth,
  }: {
    params: RequestType<TParams>
    fn: (request: RequestType<TParams>) => Promise<AxiosResponse<TResponse>>
    requireAuth?: boolean
  },
  queryOptions: UseQueryOptions<AxiosResponse<TResponse>, TError, TSelectedData, TQueryKey>,
) => {
  const isAuthed = useIsAuthenticated()
  const enabledByCaller = queryOptions.enabled ?? true
  const enabled = enabledByCaller && (requireAuth ? isAuthed : true)
  return {
    queryFn: () => FETCHER(() => fn(params)),
    placeholderData: keepPreviousData,
    enabled,
    ...queryOptions,
  }
}

export const useApiGet = <
  TParams,
  TSelectedData = unknown,
  TResponse = TSelectedData,
  TError = ApiError,
  TQueryKey extends readonly unknown[] = readonly unknown[],
>(
  params: RequestType<TParams>,
  options: UseQueryOptions<AxiosResponse<TResponse>, TError, TSelectedData, TQueryKey> & { requireAuth?: boolean },
) =>
  useQuery(
    useReturnQueryOptionQuery(
      { params, fn: (req) => getRequest<TParams, TResponse>(req), requireAuth: options.requireAuth ?? true },
      options,
    ),
  )

export const useApiPost = <TVariables, TData = unknown, TError = ApiError, TContext = unknown>(
  options?: UseMutationOptions<AxiosResponse<TData>, TError, RequestType<TVariables>, TContext>,
) => useMutation(useReturnQueryOptionMutation<TVariables, TData, TError, TContext>({ fn: (req) => postRequest<TVariables, TData>(req) }, options))

export const useApiPostForm = <TData = unknown, TError = ApiError, TContext = unknown>(
  options?: UseMutationOptions<AxiosResponse<TData>, TError, RequestType<FormData>, TContext>,
) => useMutation(useReturnQueryOptionMutation<FormData, TData, TError, TContext>({ fn: (req) => postFormRequest<TData>(req) }, options))

export const useApiPatch = <TVariables, TData = unknown, TError = ApiError, TContext = unknown>(
  options?: UseMutationOptions<AxiosResponse<TData>, TError, RequestType<TVariables>, TContext>,
) => useMutation(useReturnQueryOptionMutation<TVariables, TData, TError, TContext>({ fn: (req) => patchRequest<TVariables, TData>(req) }, options))

export const useApiPut = <TVariables, TData = unknown, TError = ApiError, TContext = unknown>(
  options?: UseMutationOptions<AxiosResponse<TData>, TError, RequestType<TVariables>, TContext>,
) => useMutation(useReturnQueryOptionMutation<TVariables, TData, TError, TContext>({ fn: (req) => putRequest<TVariables, TData>(req) }, options))

export const useApiDelete = <TVariables, TData = unknown, TError = ApiError, TContext = unknown>(
  options?: UseMutationOptions<AxiosResponse<TData>, TError, RequestType<TVariables>, TContext>,
) => useMutation(useReturnQueryOptionMutation<TVariables, TData, TError, TContext>({ fn: (req) => deleteRequest<TVariables, TData>(req) }, options))

export const useApiBlob = <
  TParams,
  TSelectedData = unknown,
  TResponse = ArrayBuffer,
  TError = ApiError,
  TQueryKey extends readonly unknown[] = readonly unknown[],
>(
  params: RequestType<TParams>,
  options: UseQueryOptions<AxiosResponse<TResponse>, TError, TSelectedData, TQueryKey>,
) => useQuery(useReturnQueryOptionQuery({ params, fn: (req) => getFileRequest<TParams, TResponse>(req) }, options))

