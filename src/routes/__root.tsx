import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Cursor from '../components/ui/Cursor'

export const Route = createRootRoute({
  component: () => (
    <>
      <Cursor />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
