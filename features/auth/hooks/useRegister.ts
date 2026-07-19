import { useMutation } from "@tanstack/react-query";
import register from "../api/register";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import ROUTES from "@/lib/routes";
import { AxiosError } from "axios";
import { ApiErrorResponse } from "@/components/shared/types";

function useRegister() {
  const router = useRouter();

  return useMutation({
    mutationFn: register,

    onSuccess: () => {
      toast.success(
        "Account created successfully. Please check your email to verify your account.",
      );

      router.push(ROUTES.auth.login);
    },

    onError: (error: AxiosError<ApiErrorResponse>) => {
      toast.error(
        error.response?.data?.message ??
          "Something went wrong while creating your account.",
      );
    },
  });
}

export default useRegister;
