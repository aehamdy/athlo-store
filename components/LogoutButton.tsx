"use client";

import Icon from "./shared/Icon";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import ROUTES from "@/lib/routes";
import { logout } from "@/lib/auth/auth";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

type LogoutButtonProps = {
  variant?: "outline" | "destructive";
};

function LogoutButton({ variant = "destructive" }: LogoutButtonProps) {
  const t = useTranslations("account");
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleLogoutClick = () => {
    logout();
    queryClient.clear();
    toast.success(t("logoutSuccess"));
    router.replace(ROUTES.public.home);
  };

  return (
    <Button variant={variant} className="w-full" onClick={handleLogoutClick}>
      <Icon name="LogOut" className="text-current" /> {t("logout")}
    </Button>
  );
}

export default LogoutButton;
