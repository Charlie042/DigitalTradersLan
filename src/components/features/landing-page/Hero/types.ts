import type { AuthUser } from '../../../../types/auth';

export interface HeroProps {
  user: AuthUser | null;
  onOpenSignIn: () => void;
}
