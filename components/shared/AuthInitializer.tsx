"use client";

import { isAuthenticated } from "@/lib/auth/auth";
import { useAuthStore } from "@/lib/stores/auth.store";
import { useLayoutEffect } from "react";

type Props = {
  children: React.ReactNode;
};

function AuthInitializer({ children }: Props) {
  useLayoutEffect(() => {
    useAuthStore.getState().setAuthenticated(isAuthenticated());
  }, []);

  return children;
}

export default AuthInitializer;
