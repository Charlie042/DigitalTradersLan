/**
 * Backend base URL (must match server CORS + cookie domain).
 *
 * - `VITE_API_URL` is baked in at **build time** (Vite). Production server `.env`
 *   does not change the deployed JS bundle — set it in your host’s **build** env.
 * - Empty `VITE_API_URL=` is treated as unset (avoids `''` → relative `/api` on wrong host).
 * - Production without `VITE_API_URL`: use **same origin** as the page (browser only).
 *   Use when your reverse proxy serves the SPA and forwards `/api` to Express.
 * - If the API lives on another host (e.g. `api.example.com`), set `VITE_API_URL`
 *   at build time to that full origin (`https://api.example.com`).
 */
export function getApiBase(): string {
  const raw = import.meta.env.VITE_API_URL;
  if (typeof raw === 'string' && raw.trim() !== '') {
    return raw.replace(/\/$/, '');
  }
  if (import.meta.env.DEV) {
    return 'http://localhost:3001';
  }
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return 'http://localhost:3001';
}
