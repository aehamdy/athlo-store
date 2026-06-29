import Heading from "@/components/shared/Heading";
import Icon from "@/components/shared/Icon";
import { useTranslations } from "next-intl";

type ReviewsSectionHeaderProps = {
  reviewsCount: number;
};

function ReviewsSectionHeader({ reviewsCount }: ReviewsSectionHeaderProps) {
  const tReviews = useTranslations("reviews");

  return (
    <div className="space-y-xs">
      <Heading as="h2" className="font-bold text-xl text-foreground">
        {tReviews("title")}
      </Heading>

      <div className="flex items-center gap-xs">
        <div className="flex items-center gap-xs">
          <div className="flex items-center gap-tiny">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Icon
                key={idx}
                name="Star"
                size={18}
                className="fill-accent-base text-accent-base"
              />
            ))}
          </div>

          <p className="font-medium text-foreground">4.5</p>
        </div>

        <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>

        <div className="text-muted-foreground">
          {tReviews("basedOnReviews", { count: reviewsCount })}
        </div>
      </div>
    </div>
  );
}

export default ReviewsSectionHeader;
