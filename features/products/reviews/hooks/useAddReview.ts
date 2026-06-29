import { useMutation, useQueryClient } from "@tanstack/react-query";
import addReview from "../api/addReview";
import reviewQueryKeys from "../constants/reviewQueryKeys";

function useAddReview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addReview,

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: reviewQueryKeys.list(`${variables.productId}`),
      });
    },
  });
}

export default useAddReview;
