import { createContext } from "react";

export type AuthUser = {
  name: string;
  email: string;
  role: string;
};

export type AuthContextValue = {
  isAuthenticated: boolean;
  user: AuthUser | null;
  signIn: (input: { email: string; password: string; remember?: boolean }) => void;
  register: (input: {
    name: string;
    email: string;
    password: string;
    remember?: boolean;
  }) => void;
  signOut: () => void;
  requestPasswordReset: (email: string) => void;
};

export const STORAGE_KEY = "ai-truthlens-auth";

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
