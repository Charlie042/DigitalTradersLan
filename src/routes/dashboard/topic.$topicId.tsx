import { createFileRoute } from '@tanstack/react-router';
import TopicDetail from '../../components/features/dashboard/TopicDetail';

export const Route = createFileRoute('/dashboard/topic/$topicId')({
  component: TopicDetailRoute,
});

function TopicDetailRoute() {
  const { topicId } = Route.useParams();
  return <TopicDetail topicId={topicId} />;
}
