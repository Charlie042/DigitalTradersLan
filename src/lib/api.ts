/** Backend base URL (must match server CORS + cookie domain in dev). */
export function getApiBase(): string {
  return import.meta.env.VITE_API_URL ?? 'http://localhost:3001';
}
