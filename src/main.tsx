import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { ThemeProvider } from './context/ThemeContext'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'
import { consumeSessionTokenFromHash } from '@/lib/authToken'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import './styles/global.scss'

// Capture the session token the API appends as #session=<jwt> after OAuth, before the app
// renders or any request fires. Needed when the SPA and API are on different sites (e.g.
// Vercel + Railway) and the browser won't send the cross-site session cookie.
consumeSessionTokenFromHash()

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
)

