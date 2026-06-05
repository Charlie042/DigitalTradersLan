import type { AxiosResponse } from 'axios'
import { network } from './network'
import type { RequestType } from './types'

export const getRequest = <TParams, TResponse = unknown>(
  request: RequestType<TParams>,
): Promise<AxiosResponse<TResponse>> =>
  network.get(request.url, {
    params: request.data,
  })

export const postRequest = <TBody, TResponse = unknown>(
  request: RequestType<TBody>,
): Promise<AxiosResponse<TResponse>> => network.post(request.url, request.data)

export const postFormRequest = <TResponse = unknown>(
  request: RequestType<FormData>,
): Promise<AxiosResponse<TResponse>> =>
  network.post(request.url, request.data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

export const patchRequest = <TBody, TResponse = unknown>(
  request: RequestType<TBody>,
): Promise<AxiosResponse<TResponse>> => network.patch(request.url, request.data)

export const putRequest = <TBody, TResponse = unknown>(
  request: RequestType<TBody>,
): Promise<AxiosResponse<TResponse>> => network.put(request.url, request.data)

export const deleteRequest = <TBody, TResponse = unknown>(
  request: RequestType<TBody>,
): Promise<AxiosResponse<TResponse>> =>
  network.delete(request.url, {
    data: request.data,
  })

export const getFileRequest = <TParams, TResponse = ArrayBuffer>(
  request: RequestType<TParams>,
): Promise<AxiosResponse<TResponse>> =>
  network.get(request.url, {
    params: request.data,
    responseType: 'arraybuffer',
  })

