'use client'

import { auth } from "@/lib/firebase/firebase.config.client";
import { User } from "firebase/auth";
import { createContext, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthContext = createContext<{user: User | null | undefined; loading: boolean; error: Error | undefined}>({
    user: null,
    loading: true,
    error: undefined
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, loading, error] = useAuthState(auth);

  return (
    <AuthContext.Provider value={{ user, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);