import { createFileRoute } from '@tanstack/react-router';
import ChallengePreview from '../../components/features/dashboard/ChallengePreview';

export const Route = createFileRoute('/dashboard/challenge/$challengeId')({
  component: ChallengePreviewRoute,
});

function ChallengePreviewRoute() {
  const { challengeId } = Route.useParams();
  return <ChallengePreview challengeId={challengeId} />;
}
