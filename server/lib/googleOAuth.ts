import { OAuth2Client } from 'google-auth-library';

export const GOOGLE_SCOPES = [
  'openid',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
];

/**
 * Callback URL is served by Express (this repo's `server/`), not Vite.
 * Google must see the same URI you register under "Authorized redirect URIs".
 */
function resolveRedirectUri(): string {
  const raw = process.env.GOOGLE_REDIRECT_URI?.trim();
  const port = process.env.PORT || '3001';
  const fallback = `http://localhost:${port}/api/auth/google/callback`;

  if (!raw) {
    return fallback;
  }

  // Common mistake: use Vite (frontend) port for the OAuth callback
  if (raw.includes(':5173') && raw.includes('/api/auth')) {
    throw new Error(
      `GOOGLE_REDIRECT_URI is set to the Vite dev server (${raw}). ` +
        `Use your API origin instead, e.g. ${fallback}. ` +
        'Register that exact URI in Google Cloud Console → Credentials → OAuth client → Authorized redirect URIs.',
    );
  }

  return raw;
}

export function getOAuth2Client(): OAuth2Client {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = resolveRedirectUri();
  if (!clientId || !clientSecret) {
    throw new Error('Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET.');
  }
  return new OAuth2Client(clientId, clientSecret, redirectUri);
}
