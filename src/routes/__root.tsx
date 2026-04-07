import { createRootRoute, Outlet } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import Cursor from '../components/ui/Cursor'

const RouterDevtoolsPanel = import.meta.env.DEV
  ? lazy(() =>
      import('@tanstack/router-devtools').then((m) => ({
        default: m.TanStackRouterDevtools,
      }))
    )
  : () => null

export const Route = createRootRoute({
  component: () => (
    <>
      <Cursor />
      <Outlet />
      {import.meta.env.DEV && (
        <Suspense fallback={null}>
          <RouterDevtoolsPanel />
        </Suspense>
      )}
    </>
  ),
})
