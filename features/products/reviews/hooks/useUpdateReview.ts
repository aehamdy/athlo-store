import { useMutation, useQueryClient } from "@tanstack/react-query";
import reviewQueryKeys from "../constants/reviewQueryKeys";
import updateReview from "../api/updateReview";

function useUpdateReview(productId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateReview,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: reviewQueryKeys.list(productId),
      });
    },
  });
}

export default useUpdateReview;
