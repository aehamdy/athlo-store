import { useMutation } from "@tanstack/react-query";
import deleteUserAccount from "../api/deleteUserAccount";
import { logout } from "@/lib/auth/auth";
import { useRouter } from "next/navigation";
import ROUTES from "@/lib/routes";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { ApiErrorResponse } from "@/components/shared/types";

function useDeleteUserAccount() {
  const router = useRouter();

  return useMutation({
    mutationFn: deleteUserAccount,

    onSuccess: () => {
      toast.success("Your account has been deleted permenantely");
      logout();
      router.push(ROUTES.public.home);
    },

    onError: (error: AxiosError<ApiErrorResponse>) => {
      toast.error(error.message ?? "Something went wrong!");
    },
  });
}

export default useDeleteUserAccount;
