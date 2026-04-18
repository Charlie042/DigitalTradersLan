import type { AuthUser } from '../../../../types/auth';

export type { AuthUser };

export interface NavbarProps {
  onOpenAuth: () => void;
  user: AuthUser | null;
  onSignOut: () => void;
  googleAuthUrl: string;
}
