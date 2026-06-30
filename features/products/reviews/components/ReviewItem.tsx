"use client";

import Heading from "@/components/shared/Heading";
import Icon from "@/components/shared/Icon";
import { ReviewItemT } from "../reviews-types";
import formatDate from "@/lib/utils/formatDate";
import formatName from "@/lib/utils/formatName";
import { useTranslations } from "next-intl";
import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import ReviewItemActions from "./ReviewItemActions";
import { useState } from "react";
import ReviewItemEditor from "./ReviewItemEditor";

type ReviewItemProps = {
  review: ReviewItemT;
};

function ReviewItem({ review }: ReviewItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const t = useTranslations("reviews");
  const currentUser = getCurrentUser();

  const isOwner = currentUser?.id === review.userId;

  const { date } = formatDate(review.createdAt);

  const formattedName = formatName(review.userName);

  if (isEditing) {
    return (
      <ReviewItemEditor
        review={review}
        isOwner={isOwner}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <article
      className={`p-3 bg-surface border ${isOwner && "border-s-4 border-s-accent-ring"} border-subtle hover:shadow-sm rounded-md duration-normal`}
    >
      <div className="flex flex-1 items-start gap-sm text-foreground">
        <div className="flex flex-1 items-start gap-sm">
          <div className="flex justify-center items-center w-10 h-10 font-medium text-md text-accent-base bg-accent-light rounded-full">
            {review.userName.charAt(0).toUpperCase()}
          </div>

          <div className="space-y-md">
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

              <div className="flex items-center gap-sm w-fit py-0.5 px-2 bg-accent-light rounded-md">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Icon
                    key={idx}
                    name="Star"
                    className={`text-accent-base ${idx + 1 <= review.rating ? "fill-accent-base" : "fill-transparent"}`}
                  />
                ))}

                <span className="text-xs text-accent-base">
                  {review.rating.toFixed(1)}
                </span>
              </div>
            </div>

            <p className="">{review.comment}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-xs">
          <Icon name="Quote" size={22} className="text-subtle" />

          {isOwner && (
            <ReviewItemActions
              reviewId={review.id}
              onEdit={() => setIsEditing(true)}
            />
          )}
        </div>
      </div>
    </article>
  );
}

export default ReviewItem;
