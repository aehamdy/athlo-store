import ROUTES from "@/lib/routes";
import Link from "next/link";
import { useTranslations } from "next-intl";

function SupportInfo() {
  const t = useTranslations("thankYouPage.support");
  const actionsT = useTranslations("actions");

  return (
    <div>
      <p className="mt-3xl text-center text-sm text-muted-foreground">
        {t("text")}{" "}
        <Link
          href={ROUTES.public.contact}
          className="hover:text-accent-base underline"
        >
          {actionsT("contactPage")}
        </Link>
      </p>
    </div>
  );
}

export default SupportInfo;
