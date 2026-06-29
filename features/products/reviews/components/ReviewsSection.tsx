import useFetchReviews from "../hooks/useFetchReviews";
import ReviewForm from "./ReviewForm";
import ReviewsList from "./ReviewsList";
import ReviewsSectionHeader from "./ReviewsSectionHeader";
import { useParams } from "next/navigation";

function ReviewsSection() {
  const params = useParams();

  const {
    data: reviewList,
    isPending,
    isError,
  } = useFetchReviews(params.id as string);

  return (
    <section className="space-y-3xl">
      <ReviewsSectionHeader />

      <div className="grid lg:grid-cols-5 gap-3xl">
        <div className="col-span-2">
          <ReviewForm />
        </div>

        <div className="col-span-3">
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
