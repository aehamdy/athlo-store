"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";

import ROUTES from "@/lib/routes";
import resetPassword from "../api/resetPassword";
import { useTranslations } from "next-intl";

function useResetPassword() {
  const t = useTranslations("authPages.resetPassword");
  const router = useRouter();

  return useMutation({
    mutationFn: resetPassword,

    onSuccess: () => {
      toast.success(t("passwordResetSuccess"));

      router.replace(ROUTES.auth.login);
    },

    onError: (error) => {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.status);
        console.log(error.response?.data);
        console.log(JSON.stringify(error.response?.data.errors, null, 2));

        toast.error(error.response?.data?.message ?? t("passwordResetFailed"));

        return;
      }

      toast.error("Something went wrong.");
    },
  });
}

export default useResetPassword;
