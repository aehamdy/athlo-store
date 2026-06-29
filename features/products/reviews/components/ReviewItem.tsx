import Heading from "@/components/shared/Heading";
import Icon from "@/components/shared/Icon";
import { ReviewItemT } from "../reviews-types";
import formatDate from "@/lib/utils/formatDate";
import formatName from "@/lib/utils/formatName";

type ReviewItemProps = {
  review: ReviewItemT;
};

function ReviewItem({ review }: ReviewItemProps) {
  const { date } = formatDate(review.createdAt);

  const formattedName = formatName(review.userName);

  return (
    <article className="p-3 bg-surface border border-subtle rounded-md">
      <div className="flex justify-between items-start gap-sm text-foreground">
        <div className="flex items-start gap-sm">
          <div className="flex justify-center items-center w-10 h-10 font-medium text-md text-accent-base bg-accent-light rounded-full">
            {review.userName.charAt(0).toUpperCase()}
          </div>

          <div className="space-y-md">
            <div className="flex flex-col gap-tiny">
              <Heading as="h4" className="font-medium text-md">
                {formattedName}
              </Heading>

              <div className="flex items-center gap-xs">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Icon
                    key={idx}
                    name="Star"
                    className={`text-accent-base ${idx + 1 <= review.rating ? "fill-accent-base" : "fill-transparent"}`}
                  />
                ))}
              </div>
            </div>

            <p className="">{review.comment}</p>
          </div>
        </div>

        <div className="text-muted-foreground">{date}</div>
      </div>
    </article>
  );
}

export default ReviewItem;
