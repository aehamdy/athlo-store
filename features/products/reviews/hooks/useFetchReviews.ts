import { useQuery } from "@tanstack/react-query";
import fetchReviews from "../api/fetchReviews";
import reviewQueryKeys from "../constants/reviewQueryKeys";

function useFetchReviews(productId: string) {
  return useQuery({
    queryKey: reviewQueryKeys.list(productId),
    queryFn: () => fetchReviews(productId),
    enabled: !!productId,
  });
}

export default useFetchReviews;
