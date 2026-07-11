import { useMutation } from "@tanstack/react-query";
import createOrder from "../api/createOrder";

function useCreateorder() {
  return useMutation({
    mutationFn: createOrder,

    onSuccess: () => {
      console.log("The order has been created!");
    },
  });
}

export default useCreateorder;
