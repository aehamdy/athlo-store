import Heading from "@/components/shared/Heading";
import Icon from "@/components/shared/Icon";
import { useTranslations } from "next-intl";
import { ReviewItemT } from "../reviews-types";

type ReviewsSectionHeaderProps = {
  reviewsList: ReviewItemT[];
};

function ReviewsSectionHeader({ reviewsList }: ReviewsSectionHeaderProps) {
  const tReviews = useTranslations("reviews");

  const reviewsCount = reviewsList.length;
  const hasReviews = reviewsCount > 0;

  const averageRating =
    reviewsCount > 0
      ? Number(
          (
            reviewsList.reduce((sum, review) => sum + review.rating, 0) /
            reviewsCount
          ).toFixed(1),
        )
      : 0;

  return (
    <div className="space-y-xs">
      <Heading as="h2" className="font-bold text-xl text-foreground">
        {tReviews("title")}
      </Heading>

      {hasReviews ? (
        <div className="flex items-center gap-xs">
          <div className="flex items-center gap-xs">
            <div className={`flex items-center gap-tiny`}>
              {Array.from({ length: 5 }).map((_, idx) => {
                const fullStars = Math.floor(averageRating);
                const hasHalfStar = averageRating - fullStars >= 0.1;

                if (idx < fullStars) {
                  return (
                    <Icon
                      key={idx}
                      name="Star"
                      size={18}
                      className="fill-accent-base text-accent-base"
                    />
                  );
                }

                if (idx === fullStars && hasHalfStar) {
                  return (
                    <Icon
                      key={idx}
                      name="StarHalf"
                      size={18}
                      className="fill-accent-base text-accent-base border"
                    />
                  );
                }

                return (
                  <Icon
                    key={idx}
                    name="Star"
                    size={18}
                    className="text-accent-base"
                  />
                );
              })}
            </div>

            <p className="font-medium text-foreground">{averageRating}</p>
          </div>

          <span className="w-1 h-1 bg-muted-foreground rounded-full" />

          <div className="text-muted-foreground">
            {tReviews("basedOnReviews", { count: reviewsList.length })}
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-sm text-muted-foreground">
          <Icon name="MessageSquare" size={18} className="text-accent-base" />

          <p className="text-sm">{tReviews("noReviews")}</p>
        </div>
      )}
    </div>
  );
}

export default ReviewsSectionHeader;
