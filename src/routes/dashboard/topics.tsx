import { createFileRoute } from '@tanstack/react-router';
import DashboardTopics from '../../components/features/dashboard/DashboardTopics';

export const Route = createFileRoute('/dashboard/topics')({
  component: DashboardTopics,
});
