import { useTranslations } from "next-intl";
import Link from "next/link";
import ROUTES from "@/lib/routes";
import LayoutSection from "../../components/shared/LayoutSection";
import LayoutContainer from "../../components/shared/LayoutContainer";
import SectionHeader from "@/components/shared/SectionHeader";

function BrandStoryBanner() {
  const t = useTranslations("home.performance");

  return (
    <LayoutSection>
      <LayoutContainer>
        <SectionHeader headingLevel="h2" sectionTitle={t("title")} />

        <p className="w-9/10 lg:w-1/2 mx-auto mb-8 text-muted-foreground text-center">
          {t("description")}
        </p>

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
