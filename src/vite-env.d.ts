/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Defaults to http://localhost:3001 in `getApiBase()` if unset. */
  readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
