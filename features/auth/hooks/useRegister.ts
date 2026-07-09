import { useMutation } from "@tanstack/react-query";
import register from "../api/register";

function useRegister() {
  return useMutation({
    mutationFn: register,
  });
}

export default useRegister;
