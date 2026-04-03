import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tanstackRouter from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tanstackRouter(), react()],
  css: {
    preprocessorOptions: {
      scss: {
        // @ts-expect-error - 'api' is a valid option but might not be completely typed in this Vite version yet
        api: 'modern-compiler'
      }
    }
  }
})
