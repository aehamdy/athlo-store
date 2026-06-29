"use client";

import Icon from "./shared/Icon";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/stores/auth.store";
import ROUTES from "@/lib/routes";
import { logout } from "@/lib/auth/auth";

function LogoutButton() {
  const router = useRouter();

  const handleLogoutClick = () => {
    logout();

    useAuthStore.getState().logout();

    router.replace(ROUTES.public.home);
  };

  return (
    <Button
      variant="destructive"
      className="w-full text-white"
      onClick={handleLogoutClick}
    >
      <Icon name="LogOut" className="text-current" /> Logout
    </Button>
  );
}

export default LogoutButton;
