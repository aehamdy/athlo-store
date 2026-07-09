import { ReviewItemT } from "../reviews-types";
import ReviewItem from "./ReviewItem";
import ReviewListSkeleton from "./ReviewListSkeleton";
import { useTranslations } from "next-intl";
import getCurrentUserClaims from "@/lib/auth/getCurrentUserClaims";

type ReviewsListProps = {
  reviews: ReviewItemT[];
  isPending: boolean;
  isError: boolean;
};

function ReviewsList({ reviews, isPending, isError }: ReviewsListProps) {
  const tMessage = useTranslations("messages");
  const tReviews = useTranslations("reviews");

  const claims = getCurrentUserClaims();
  const userId = claims?.id ?? 0;

  if (isPending) {
    return <ReviewListSkeleton />;
  }

  if (isError) {
    return <p>{tMessage("error")}</p>;
  }

  if (reviews.length === 0) {
    return (
      <div className="flex h-105.25 items-center justify-center">
        <p className="text-center text-muted-foreground">
          {tReviews("noReviews")}
        </p>
      </div>
    );
  }

  return (
    <ul className="max-h-105.25 space-y-md p-tiny overflow-y-auto">
      {reviews.map((review) => (
        <li key={review.id}>
          <ReviewItem review={review} currentUserId={userId} />
        </li>
      ))}
    </ul>
  );
}

export default ReviewsList;
