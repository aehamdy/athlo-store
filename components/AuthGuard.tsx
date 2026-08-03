"use client";

import ROUTES from "@/lib/routes";
import { useAuthStore } from "@/lib/stores/auth.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoadingIndicator from "./shared/LoadingIndicator";

type AuthGuardProps = {
  children: React.ReactNode;
};
function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace(ROUTES.auth.login);
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingIndicator size="lg" />
      </div>
    );
  }

  return <>{children}</>;
}

export default AuthGuard;
