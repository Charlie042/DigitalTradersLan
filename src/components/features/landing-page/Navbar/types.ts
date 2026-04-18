export type AuthUser = {
  id: number;
  email: string;
  name: string | null;
  picture: string | null;
  hasGoogleRefreshToken: boolean;
};

export interface NavbarProps {
  onOpenAuth: () => void;
  user: AuthUser | null;
  onSignOut: () => void;
  googleAuthUrl: string;
}
