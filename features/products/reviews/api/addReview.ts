import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";
import { AddReviewPayload } from "../reviews-types";

async function addReview(payload: AddReviewPayload) {
  const data = await api.post(ENDPOINTS.review.create, payload);

  return data;
}

export default addReview;
