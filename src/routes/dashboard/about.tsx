import { createFileRoute } from '@tanstack/react-router';
import AboutPage from '../../components/features/dashboard/AboutPage';

export const Route = createFileRoute('/dashboard/about')({
  component: AboutPage,
});
