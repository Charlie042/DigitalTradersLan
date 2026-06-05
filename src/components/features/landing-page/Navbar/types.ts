import type { AuthUser } from '../../../../types/auth';

export interface NavbarProps {
  onOpenSignIn: () => void;
  user: AuthUser | null;
}
