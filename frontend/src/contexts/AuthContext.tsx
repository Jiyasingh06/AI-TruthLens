import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  AuthContext,
  STORAGE_KEY,
  type AuthContextValue,
  type AuthUser,
} from "./auth-context";

type StoredSession = {
  user: AuthUser;
  isAuthenticated: boolean;
};

function readStoredSession(): StoredSession | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as StoredSession;
    if (!parsed?.user || typeof parsed.isAuthenticated !== "boolean") return null;
    return parsed;
  } catch {
    return null;
  }
}

type AuthProviderProps = {
  children: ReactNode;
};

function clearStoredSession() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const stored = readStoredSession();
    if (!stored) return;

    setUser(stored.user);
    setIsAuthenticated(stored.isAuthenticated);
  }, []);

  const persistSession = useCallback(
    (nextUser: AuthUser, remember?: boolean) => {
      setUser(nextUser);
      setIsAuthenticated(true);

      if (!remember || typeof window === "undefined") {
        clearStoredSession();
        return;
      }

      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          user: nextUser,
          isAuthenticated: true,
        } satisfies StoredSession),
      );
    },
    [],
  );

  const signIn = useCallback<AuthContextValue["signIn"]>(
    ({ email, password: _password, remember }) => {
      const nextUser: AuthUser = {
        name: email.split("@")[0] || "Analyst",
        email,
        role: "Research Analyst",
      };

      persistSession(nextUser, remember);
    },
    [persistSession],
  );

  const register = useCallback<AuthContextValue["register"]>(
    ({ name, email, password: _password, remember }) => {
      const nextUser: AuthUser = {
        name,
        email,
        role: "Workspace Owner",
      };

      persistSession(nextUser, remember);
    },
    [persistSession],
  );

  const signOut = useCallback(() => {
    setUser(null);
    setIsAuthenticated(false);
    clearStoredSession();
  }, []);

  const requestPasswordReset = useCallback<AuthContextValue["requestPasswordReset"]>(
    (_email) => {
      return;
    },
    [],
  );

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated,
      user,
      signIn,
      register,
      signOut,
      requestPasswordReset,
    }),
    [isAuthenticated, register, requestPasswordReset, signIn, signOut, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
