import axios from 'axios'
import { getApiBase } from '@/lib/api'
import { getStoredSessionToken } from '@/lib/authToken'

export const network = axios.create({
  baseURL: getApiBase(),
  withCredentials: true,
  headers: {
    Accept: 'application/json',
  },
})

// Attach the stored session token as a Bearer header. This is the fallback path for
// cross-site deploys where the session cookie isn't sent; same-origin setups keep using
// the cookie and this header is simply ignored when absent.
network.interceptors.request.use((config) => {
  const token = getStoredSessionToken()
  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`)
  }
  return config
})

