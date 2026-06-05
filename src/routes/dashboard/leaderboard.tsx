import { createFileRoute } from '@tanstack/react-router';
import DashboardPlaceholderPage from '../../components/features/dashboard/DashboardPlaceholderPage';

export const Route = createFileRoute('/dashboard/leaderboard')({
  component: LeaderboardRoute,
});

function LeaderboardRoute() {
  return (
    <DashboardPlaceholderPage
      title="Leaderboard"
      emoji="🏆"
      body="Rankings and friendly competition are coming in a future update."
    />
  );
}
