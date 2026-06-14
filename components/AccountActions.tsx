import { useAuthStore } from "@/lib/stores/auth.store";
import AccountMenu from "./AccountMenu";
import SignInButton from "./SignInButton";

function AccountActions() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated ? <AccountMenu /> : <SignInButton />;
}

export default AccountActions;
