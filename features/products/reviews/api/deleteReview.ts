import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";

async function deleteReview(reviewId: number) {
  await api.delete(ENDPOINTS.review.delete(reviewId.toString()));
}

export default deleteReview;
