import { createFileRoute } from '@tanstack/react-router';
import FireMode from '../../components/features/dashboard/FireMode';

export const Route = createFileRoute('/dashboard/fire-mode')({
  component: FireMode,
});
