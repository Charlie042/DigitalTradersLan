import { createFileRoute } from '@tanstack/react-router';
import ChallengePreview from '../../components/features/dashboard/ChallengePreview';
import { FIRE_MODE_CHALLENGE_ID } from '../../lib/fireModeChallenge';

export const Route = createFileRoute('/dashboard/fire-mode')({
  component: FireModeRoute,
});

function FireModeRoute() {
  return <ChallengePreview challengeId={FIRE_MODE_CHALLENGE_ID} />;
}
