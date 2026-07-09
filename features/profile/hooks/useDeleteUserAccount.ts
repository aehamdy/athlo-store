import { useMutation } from "@tanstack/react-query";
import deleteUserAccount from "../api/deleteUserAccount";

function useDeleteUserAccount() {
  return useMutation({
    mutationFn: deleteUserAccount,
  });
}

export default useDeleteUserAccount;
