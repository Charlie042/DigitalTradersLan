export type AuthUser = {
  id: number;
  email: string;
  name: string | null;
  picture: string | null;
  hasGoogleRefreshToken: boolean;
};
