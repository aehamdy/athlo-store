import useFetchReviews from "../hooks/useFetchReviews";
import ReviewForm from "./ReviewForm";
import ReviewsList from "./ReviewsList";
import ReviewsSectionHeader from "./ReviewsSectionHeader";
import { useParams } from "next/navigation";
import ReviewLoginPanel from "./ReviewLoginPanel";
import { getCurrentUser } from "@/lib/auth/getCurrentUser";

function ReviewsSection() {
  const currentUser = getCurrentUser();
  const params = useParams();

  const {
    data: reviewList,
    isPending,
    isError,
  } = useFetchReviews(params.id as string);

  return (
    <section className="space-y-3xl">
      <ReviewsSectionHeader reviewsCount={reviewList?.length ?? 0} />

      <div className="grid lg:grid-cols-5 gap-3xl">
        <div className="lg:col-span-2">
          {currentUser ? <ReviewForm /> : <ReviewLoginPanel />}
        </div>

        <div className="lg:col-span-3">
          <ReviewsList
            reviews={reviewList ?? []}
            isPending={isPending}
            isError={isError}
          />
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
