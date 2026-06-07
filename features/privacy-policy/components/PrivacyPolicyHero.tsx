import Heading from "@/components/shared/Heading";
import LayoutContainer from "@/components/shared/preferences/LayoutContainer";
import LayoutSection from "@/components/shared/preferences/LayoutSection";
import { useTranslations } from "next-intl";

function PrivacyPolicyHero() {
  const t = useTranslations("privacyPolicyPage");

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

export default PrivacyPolicyHero;
