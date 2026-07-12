"use client";

import Icon from "./shared/Icon";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/stores/auth.store";
import ROUTES from "@/lib/routes";
import { logout } from "@/lib/auth/auth";
import { useTranslations } from "next-intl";

type LogoutButtonProps = {
  variant?: "outline" | "destructive";
};

function LogoutButton({ variant = "destructive" }: LogoutButtonProps) {
  const t = useTranslations("account");
  const router = useRouter();

  const handleLogoutClick = () => {
    logout();

    useAuthStore.getState().logout();

    router.replace(ROUTES.public.home);
  };

  return (
    <Button variant={variant} className="w-full" onClick={handleLogoutClick}>
      <Icon name="LogOut" className="text-current" /> {t("logout")}
    </Button>
  );
}

export default LogoutButton;
