import { AxiosError } from "axios";
import login from "../api/login";
import { useMutation } from "@tanstack/react-query";
import { ApiErrorResponse } from "@/components/shared/types";
import { toast } from "sonner";

function useLogin() {
  return useMutation({
    mutationFn: login,

    onSuccess: () => {
      toast.success("You've signed in successfully.");
    },

    onError: (error: AxiosError<ApiErrorResponse>) => {
      toast.error(
        error.response?.data?.message ??
          "Something went wrong while signing you in.",
      );
    },
  });
}

export default useLogin;
