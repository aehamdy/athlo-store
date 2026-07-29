import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import verifyCode from "../api/verifyCode";
import { VerifyCodePayload } from "../types";
import ROUTES from "@/lib/routes";

function useVerifyCode() {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: VerifyCodePayload) => verifyCode(payload),

    onSuccess: (_, variables) => {
      toast.success("Verification code confirmed.");

      router.push(
        `${ROUTES.auth.resetPassword}?email=${encodeURIComponent(
          variables.email,
        )}`,
      );
    },

    onError: (error) => {
      toast.error(error?.message || "Invalid verification code.");
    },
  });
}

export default useVerifyCode;
