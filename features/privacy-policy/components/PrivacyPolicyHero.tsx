import LayoutContainer from "@/components/shared/LayoutContainer";
import LayoutSection from "@/components/shared/LayoutSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { useTranslations } from "next-intl";

function PrivacyPolicyHero() {
  const t = useTranslations("privacyPolicyPage");

  return (
    <LayoutSection>
      <LayoutContainer>
        <div>
          <SectionHeader sectionTitle={t("hero.title")} />

          <p className="text-lg text-muted-foreground">
            {t("hero.description")}
          </p>
        </div>
      </LayoutContainer>
    </LayoutSection>
  );
}

export default PrivacyPolicyHero;
