import { createFileRoute } from '@tanstack/react-router';
import DashboardPlaceholderPage from '../../components/features/dashboard/DashboardPlaceholderPage';

export const Route = createFileRoute('/dashboard/analytics')({
  component: AnalyticsRoute,
});

function AnalyticsRoute() {
  return (
    <DashboardPlaceholderPage
      title="Analytics"
      emoji="📊"
      body="Performance insights and streak history will land here soon."
    />
  );
}
