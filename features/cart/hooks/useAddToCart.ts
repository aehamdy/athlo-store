import { useMutation, useQueryClient } from "@tanstack/react-query";
import addToCart from "../api/addToCart";
import cartQueryKeys from "../constants/cartQueryKeys";

function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addToCart,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: cartQueryKeys.all,
      });
    },
  });
}

export default useAddToCart;
