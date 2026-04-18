export type { AuthUser } from '../../../../types/auth';

export interface NavbarProps {
  onOpenAuth: () => void;
  user: AuthUser | null;
  onSignOut: () => void;
  googleAuthUrl: string;
}
