import { useMutation } from "@tanstack/react-query";
import sendVerificationCode from "../api/sendVerificationCode";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import ROUTES from "@/lib/routes";

function useSendVerificationCode() {
  const router = useRouter();

  return useMutation({
    mutationFn: sendVerificationCode,

    onSuccess: (_, variables) => {
      toast.success("A verification code has been sent to your email.");
      router.push(
        `${ROUTES.auth.verifyCode}?email=${encodeURIComponent(variables.email)}`,
      );
    },

    onError: (error) => {
      toast.error(error.message || "Something went wrong!");
    },
  });
}

export default useSendVerificationCode;
