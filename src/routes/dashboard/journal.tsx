import { createFileRoute } from '@tanstack/react-router';
import DashboardPlaceholderPage from '../../components/features/dashboard/DashboardPlaceholderPage';

export const Route = createFileRoute('/dashboard/journal')({
  component: JournalRoute,
});

function JournalRoute() {
  return (
    <DashboardPlaceholderPage
      title="Journal"
      emoji="📓"
      body="Your trading notes and session reflections will live here."
    />
  );
}
