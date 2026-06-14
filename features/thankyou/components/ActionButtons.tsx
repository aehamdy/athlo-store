import Link from "next/link";
import ROUTES from "@/lib/routes";
import { useTranslations } from "next-intl";
import Icon from "@/components/shared/Icon";

function ActionButtons() {
  const t = useTranslations("actions");

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center animate-fade-in">
      <Link
        href={ROUTES.public.products}
        className="group flex justify-center items-center gap-sm w-full sm:w-fit p-sm font-medium text-primary-dark bg-accent-base hover:bg-accent-soft transition-colors duration-normal rounded-md"
      >
        {t("continueShopping")}
        <Icon
          name="ArrowRight"
          className="flex justify-center items-center w-4 h-4 text-primary-dark group-hover:translate-x-1 transition-transform duration-normal"
        />
      </Link>

      <Link
        href={ROUTES.public.home}
        className="flex justify-center items-center p-sm font-medium hover:text-primary-dark bg-base hover:bg-accent-soft border border-subtle rounded-md transition-colors duration-normal"
      >
        {t("backToHome")}
      </Link>
    </div>
  );
}

export default ActionButtons;
