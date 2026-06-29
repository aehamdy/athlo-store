import { z } from "zod";
import { MAX_REVIEW_LENGTH } from "./constants/constants";

export const reviewSchema = z.object({
  rating: z
    .number()
    .min(1, "Please select a rating.")
    .max(5, "Rating cannot exceed 5 stars."),
  comment: z
    .string()
    .trim()
    .min(1, "Please write your review.")
    .max(
      MAX_REVIEW_LENGTH,
      `Your review cannot exceed ${MAX_REVIEW_LENGTH} characters.`,
    ),
});

export type ReviewFormType = z.infer<typeof reviewSchema>;
