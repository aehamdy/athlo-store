import { useMutation, useQueryClient } from "@tanstack/react-query";
import createOrder from "../api/createOrder";
import cartQueryKeys from "@/features/cart/constants/cartQueryKeys";
import { toast } from "sonner";

function useCreateorder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createOrder,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: cartQueryKeys.items,
      });

      queryClient.invalidateQueries({
        queryKey: cartQueryKeys.summary,
      });
    },

    onError: (err) => {
      toast.error(err.message || "Something went wrong!");
    },
  });
}

export default useCreateorder;
