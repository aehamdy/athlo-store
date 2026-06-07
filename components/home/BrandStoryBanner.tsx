import { useTranslations } from "next-intl";
import Link from "next/link";
import SectionHeader from "../SectionHeader";
import ROUTES from "@/lib/routes";
import LayoutSection from "../shared/LayoutSection";
import LayoutContainer from "../shared/LayoutContainer";

function BrandStoryBanner() {
  const t = useTranslations("home.performance");

  return (
    <LayoutSection>
      <LayoutContainer>
        <SectionHeader headingLevel="h2" sectionTitle={t("title")} />

        <p className="text-muted-foreground mx-auto mb-8">{t("description")}</p>

        <div className="w-fit mx-auto">
          <Link href={ROUTES.public.about} className="main-button">
            {t("cta")}
          </Link>
        </div>
      </LayoutContainer>
    </LayoutSection>
  );
}

export default BrandStoryBanner;
