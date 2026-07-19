"use client";

import useFetchReviews from "../hooks/useFetchReviews";
import ReviewForm from "./ReviewForm";
import ReviewsList from "./ReviewsList";
import ReviewsSectionHeader from "./ReviewsSectionHeader";
import { useParams } from "next/navigation";
import ReviewLoginPanel from "./ReviewLoginPanel";
import { useAuthStore } from "@/lib/stores/auth.store";

function ReviewsSection() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
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
          {isAuthenticated ? <ReviewForm /> : <ReviewLoginPanel />}
        </div>

        <div
          className={`lg:col-span-3 ${reviewList?.length === 0 && "bg-surface border border-subtle rounded-md"}`}
        >
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
