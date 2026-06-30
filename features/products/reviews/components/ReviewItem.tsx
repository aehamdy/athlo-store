import Heading from "@/components/shared/Heading";
import Icon from "@/components/shared/Icon";
import { ReviewItemT } from "../reviews-types";
import formatDate from "@/lib/utils/formatDate";
import formatName from "@/lib/utils/formatName";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { getCurrentUser } from "@/lib/auth/getCurrentUser";

type ReviewItemProps = {
  review: ReviewItemT;
};

function ReviewItem({ review }: ReviewItemProps) {
  const t = useTranslations("reviews");
  const currentUser = getCurrentUser();

  const isOwner = currentUser?.id === review.userId;

  const { date } = formatDate(review.createdAt);

  const formattedName = formatName(review.userName);

  return (
    <article className="p-3 bg-surface border border-subtle hover:shadow-sm rounded-md duration-normal">
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
            <div className="flex flex-col gap-xs">
              <Button
                variant="plain"
                className="group text-muted-foreground hover:bg-red-500/10"
                onClick={() => {}}
              >
                <Icon name="Trash2" className="group-hover:text-red-500" />
              </Button>

              <Button
                variant="plain"
                className="group text-muted-foreground hover:text-bg-blue-500 hover:bg-blue-500/10"
                onClick={() => {}}
              >
                <Icon name="Pen" className="group-hover:text-blue-500" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default ReviewItem;
