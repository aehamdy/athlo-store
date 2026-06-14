import login from "../api/login";
import { useMutation } from "@tanstack/react-query";

function useLogin() {
  return useMutation({
    mutationFn: login,
  });
}

export default useLogin;
