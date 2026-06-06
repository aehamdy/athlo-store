import { useTranslations } from "next-intl";
import Link from "next/link";
import SectionHeader from "../SectionHeader";
import ROUTES from "@/lib/routes";

function BrandStoryBanner() {
  const t = useTranslations("home.performance");
  return (
    <section className="py-20 bg-linear-to-r from-accent-base/10 to-accent-base/5">
      <div className="container mx-auto px-4 text-center">
        <SectionHeader sectionTitle={t("title")} />

        <p className="text-muted-foreground mx-auto mb-8">{t("description")}</p>

        <div className="w-fit mx-auto">
          <Link href={ROUTES.public.about} className="main-button">
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BrandStoryBanner;
