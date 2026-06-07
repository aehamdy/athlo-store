import Heading from "@/components/shared/Heading";
import LayoutContainer from "@/components/shared/preferences/LayoutContainer";
import LayoutSection from "@/components/shared/preferences/LayoutSection";
import { useTranslations } from "next-intl";

function TermsAndConditionsHero() {
  const t = useTranslations("termsAndConditionsPage");

  return (
    <LayoutSection>
      <LayoutContainer>
        <div>
          <Heading
            as="h1"
            className="mb-xs font-bold text-foreground text-4xl md:text-5xl"
          >
            {t("hero.title")}
          </Heading>

          <p className="text-lg text-muted-foreground">
            {t("hero.description")}
          </p>
        </div>
      </LayoutContainer>
    </LayoutSection>
  );
}

export default TermsAndConditionsHero;
