import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";
import { ReviewItemT, ReviewsApiResponse } from "../reviews-types";

async function fetchReviews(productId: string) {
  const response = await api.get<ReviewsApiResponse<ReviewItemT[]>>(
    ENDPOINTS.review.list(productId),
  );

  return response.data.data;
}

export default fetchReviews;
