import { createFileRoute } from '@tanstack/react-router';
import DashboardPlaceholderPage from '../../components/features/dashboard/DashboardPlaceholderPage';

export const Route = createFileRoute('/dashboard/settings')({
  component: SettingsRoute,
});

function SettingsRoute() {
  return (
    <DashboardPlaceholderPage
      title="Settings"
      emoji="⚙️"
      body="Account preferences and notifications will be configurable here."
    />
  );
}
