import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "next/navigation";

import { MAX_REVIEW_LENGTH } from "../constants/constants";
import useAddReview from "../hooks/useAddReview";
import RatingInput from "./RatingInput";
import { ReviewFormType, reviewSchema } from "../reviews-schema";

function ReviewForm() {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<ReviewFormType>({
    resolver: zodResolver(reviewSchema),
    mode: "onChange",
    defaultValues: {
      rating: 0,
      comment: "",
    },
  });

  const comment = watch("comment");

  const { mutate, isPending } = useAddReview();

  const onSubmit = (data: ReviewFormType) => {
    mutate(
      {
        productId,
        ...data,
      },
      {
        onSuccess: () => {
          reset();
        },
      },
    );
  };

  return (
    <div className="space-y-xl rounded-md border bg-surface p-6 text-foreground">
      <Heading as="h3" className="text-lg font-medium">
        Write a Review
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-xl">
        <Field>
          <FieldLabel>Your Rating</FieldLabel>

          <Controller
            control={control}
            name="rating"
            render={({ field }) => (
              <RatingInput value={field.value} onChange={field.onChange} />
            )}
          />

          {errors.rating && (
            <p className="text-sm text-destructive">{errors.rating.message}</p>
          )}
        </Field>

        <Field>
          <FieldLabel htmlFor="review-message" className="text-sm font-normal">
            Your Review
          </FieldLabel>

          <Textarea
            id="review-message"
            placeholder="Share your thoughts about this product..."
            className="h-30 text-foreground border-subtle focus-visible:ring-accent-soft"
            maxLength={MAX_REVIEW_LENGTH}
            {...register("comment")}
          />

          <div className="mt-1 flex items-center justify-between">
            <div>
              {errors.comment && (
                <p className="text-sm text-destructive">
                  {errors.comment.message}
                </p>
              )}
            </div>

            <span className="text-sm text-muted-foreground">
              {comment.length}/{MAX_REVIEW_LENGTH}
            </span>
          </div>
        </Field>

        <Button
          type="submit"
          className="w-full py-sm"
          disabled={isPending || !isValid}
        >
          {isPending ? "Submitting..." : "Submit Review"}
        </Button>
      </form>
    </div>
  );
}

export default ReviewForm;
