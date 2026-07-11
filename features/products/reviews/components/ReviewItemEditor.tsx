"use client";

import Icon from "@/components/shared/Icon";
import { ReviewItemT } from "../reviews-types";
import { Textarea } from "@/components/ui/textarea";
import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button";
import { MAX_REVIEW_LENGTH } from "../constants/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { ReviewFormType, reviewSchema } from "../reviews-schema";
import RatingInput from "./RatingInput";
import useUpdateReview from "../hooks/useUpdateReview";
import { useParams } from "next/navigation";
import formatName from "@/lib/utils/formatTitle";
import { useTranslations } from "next-intl";
import formatDate from "@/lib/utils/formatDate";

type ReviewItemEditorProps = {
  review: ReviewItemT;
  isOwner: boolean;
  onCancel: () => void;
};

function ReviewItemEditor({
  review,
  isOwner,
  onCancel,
}: ReviewItemEditorProps) {
  const t = useTranslations("reviews");
  const tActions = useTranslations("actions");
  const { id: productId } = useParams<{ id: string }>();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ReviewFormType>({
    resolver: zodResolver(reviewSchema),
    mode: "onChange",
    defaultValues: {
      rating: review.rating,
      comment: review.comment,
    },
  });

  const formattedName = formatName(review.userName);
  const { date } = formatDate(review.createdAt);

  const comment = watch("comment");
  const rating = watch("rating");

  const { mutate: updateReview, isPending } = useUpdateReview(productId);

  const onSubmit = (data: ReviewFormType) => {
    updateReview(
      {
        id: review.id,
        productId: review.productId,
        ...data,
      },
      {
        onSuccess: () => {
          onCancel();
        },
      },
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`p-3 bg-surface border ${isOwner && "border-s-4 border-s-accent-ring"} border-subtle hover:shadow-sm rounded-md duration-normal`}
    >
      <div className="flex flex-1 items-start gap-sm">
        <div className="flex justify-center items-center w-10 h-10 font-medium text-md text-accent-base bg-accent-light rounded-full">
          {review.userName.charAt(0).toUpperCase()}
        </div>

        <div className="w-full space-y-md">
          <div className="flex flex-col gap-tiny">
            <div className="flex items-center gap-sm">
              <Heading as="h4" className="font-medium text-md">
                {formattedName}
              </Heading>

              {isOwner && (
                <span className="px-4 font-medium text-sm text-accent-base bg-accent-light rounded-lg">
                  {t("you")}
                </span>
              )}

              <div className="text-xs text-muted-foreground">{date}</div>
            </div>

            <div className="flex flex-col gap-tiny">
              <div className="flex items-center gap-sm w-fit py-0.5 px-2 bg-accent-light rounded-md">
                <Controller
                  control={control}
                  name="rating"
                  render={({ field }) => (
                    <RatingInput
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />

                <span className="text-xs text-accent-base">
                  {rating.toFixed(1)}
                </span>
              </div>

              {errors.rating && (
                <p className="text-sm text-destructive">
                  {errors.rating.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-tiny">
              <Textarea
                className="h-30 text-foreground border-subtle focus-visible:ring-accent-soft"
                maxLength={MAX_REVIEW_LENGTH}
                {...register("comment")}
              />

              {errors.comment && (
                <p className="text-sm text-destructive">
                  {errors.comment.message}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-md mt-md text-dark">
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center gap-sm"
                  onClick={onCancel}
                >
                  {tActions("cancel")}
                  <Icon name="X" className="text-current" />
                </Button>

                <Button
                  type="submit"
                  className="flex items-center gap-sm"
                  disabled={isPending || !isValid}
                >
                  {tActions("save")}
                  <Icon name="Check" className="text-current" />
                </Button>
              </div>

              <span className="text-sm text-muted-foreground">
                {comment.length}/{MAX_REVIEW_LENGTH}
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ReviewItemEditor;
