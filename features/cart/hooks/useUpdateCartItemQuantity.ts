import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateCartItemQuantity from "../api/updateCartItemQuantity";
import cartQueryKeys from "../constants/cartQueryKeys";

function useUpdateCartItemQuantity() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCartItemQuantity,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: cartQueryKeys.all,
      });
    },
  });
}

export default useUpdateCartItemQuantity;
