import { useMutation } from "@tanstack/react-query";
import updatePassword from "../api/updatePassword";

function useUpdatePassword() {
  return useMutation({
    mutationFn: updatePassword,
  });
}

export default useUpdatePassword;
