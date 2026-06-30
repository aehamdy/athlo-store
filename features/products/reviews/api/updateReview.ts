import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";
import { EditReviewPayload } from "../reviews-types";

async function updateReview(payload: EditReviewPayload) {
  const response = await api.put(ENDPOINTS.review.edit, payload);

  return response.data;
}

export default updateReview;
