import { Outlet, createFileRoute } from '@tanstack/react-router';
import DashboardLayout from '../components/features/dashboard/DashboardLayout';

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayoutRoute,
});

function DashboardLayoutRoute() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
