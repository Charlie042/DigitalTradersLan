import axios from 'axios'
import { getApiBase } from '@/lib/api'

export const network = axios.create({
  baseURL: getApiBase(),
  withCredentials: true,
  headers: {
    Accept: 'application/json',
  },
})

