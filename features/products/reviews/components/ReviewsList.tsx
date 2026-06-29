import { ReviewItemT } from "../reviews-types";
import ReviewItem from "./ReviewItem";
import ReviewListSkeleton from "./ReviewListSkeleton";

type ReviewsListProps = {
  reviews: ReviewItemT[];
  isPending: boolean;
  isError: boolean;
};

function ReviewsList({ reviews, isPending, isError }: ReviewsListProps) {
  if (isPending) {
    return <ReviewListSkeleton />;
  }

  if (isError) {
    return <p>Something went wrong.</p>;
  }

  if (reviews.length === 0) {
    return (
      <div className="flex h-105.25 items-center justify-center">
        <p className="text-center text-muted-foreground">
          No reviews yet. Be the first to share your experience!
        </p>
      </div>
    );
  }

  return (
    <ul className="p-tiny h-105.25 overflow-y-auto space-y-md">
      {reviews.map((review) => (
        <li key={review.id}>
          <ReviewItem review={review} />
        </li>
      ))}
    </ul>
  );
}

export default ReviewsList;
