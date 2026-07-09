"use client";

import getCurrentUserData from "@/lib/auth/getCurrentUserData";
import { useAuthStore } from "@/lib/stores/auth.store";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

function AuthInitializer({ children }: Props) {
  const setUser = useAuthStore((s) => s.setUser);
  const logout = useAuthStore((s) => s.logout);
  const setInitialized = useAuthStore((s) => s.setInitialized);

  useEffect(() => {
    async function initialize() {
      try {
        const user = await getCurrentUserData();

        if (user) {
          setUser(user);
        } else {
          logout();
        }
      } finally {
        setInitialized(true);
      }
    }

    initialize();
  }, [logout, setInitialized, setUser]);

  return children;
}

export default AuthInitializer;
