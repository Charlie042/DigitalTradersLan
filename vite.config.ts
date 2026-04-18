import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tanstackRouter from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tanstackRouter(), react()],
  server: {
    // So same-origin `/api/*` during dev can reach Express (optional; explicit VITE_API_URL also works).
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // @ts-expect-error - 'api' is a valid option but might not be completely typed in this Vite version yet
        api: 'modern-compiler'
      }
    }
  }
})
