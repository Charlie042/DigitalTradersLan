import { createFileRoute } from '@tanstack/react-router';
import TopicsPage from '../../components/features/dashboard/TopicsPage';

export const Route = createFileRoute('/dashboard/topics')({
  component: TopicsPage,
});
