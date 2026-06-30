import { useMutation, useQueryClient } from "@tanstack/react-query";
import reviewQueryKeys from "../constants/reviewQueryKeys";
import deleteReview from "../api/deleteReview";

function useDeleteReview(productId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteReview,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: reviewQueryKeys.list(productId),
      });
    },
  });
}

export default useDeleteReview;
