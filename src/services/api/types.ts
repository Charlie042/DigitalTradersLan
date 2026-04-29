export type RequestType<TData> = {
  url: string
  data: TData
}

export type ApiError = {
  status?: number
  message?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  raw?: any
}

