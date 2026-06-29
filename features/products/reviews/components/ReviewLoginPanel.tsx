import Heading from "@/components/shared/Heading";
import Icon from "@/components/shared/Icon";
import ROUTES from "@/lib/routes";
import { useTranslations } from "next-intl";
import Link from "next/link";

function ReviewLoginPanel() {
  const t = useTranslations("navigation");
  const tReviews = useTranslations("reviews");

  return (
    <div className="h-full p-6 bg-surface border rounded-md">
      <div className="flex flex-col justify-evenly items-center gap-md h-full">
        <div className="p-4 bg-accent-light rounded-full">
          <Icon name="Lock" className="text-accent-base" size={36} />
        </div>

        <div className="space-y-xs text-center">
          <Heading as="h4" className="font-semibold text-md text-foreground">
            {tReviews("signInToWrite")}
          </Heading>

          <p className="text-muted-foreground">
            {tReviews("signInDescription")}
          </p>
        </div>

        <Link href={ROUTES.auth.login} className="main-button font-medium">
          {t("login")}
        </Link>
      </div>
    </div>
  );
}

export default ReviewLoginPanel;
