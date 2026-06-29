"use client";

import AccountMenu from "./AccountMenu";
import SignInButton from "./SignInButton";
import { useAuthStore } from "@/lib/stores/auth.store";

function AccountActions() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated ? <AccountMenu /> : <SignInButton />;
}

export default AccountActions;
