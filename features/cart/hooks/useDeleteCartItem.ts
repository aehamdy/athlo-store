import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteCartItem from "../api/deleteCartItem";
import cartQueryKeys from "../constants/cartQueryKeys";

function useDeleteCartItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCartItem,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: cartQueryKeys.items,
      });

      queryClient.invalidateQueries({
        queryKey: cartQueryKeys.summary,
      });
    },
  });
}

export default useDeleteCartItem;
