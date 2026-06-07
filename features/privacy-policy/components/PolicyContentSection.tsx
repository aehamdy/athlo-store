import { useTranslations } from "next-intl";
import PrivacyPolicyCard from "./PrivacyPolicyCard";

const sections = [
  "introduction",
  "informationWeCollect",
  "howWeUseYourInformation",
  "sharingYourInformation",
  "cookies",
  "dataSecurity",
  "yourRights",
  "updates",
] as const;

function PolicyContentSection() {
  const t = useTranslations("privacyPolicyPage");

  return (
    <section className="py-7xl bg-background">
      <div className="flex flex-col items-center gap-3xl mx-auto w-9/10 lg:w-1/2">
        {sections.map((section) => (
          <PrivacyPolicyCard
            key={section}
            title={t(`sections.${section}.title`)}
            body={t(`sections.${section}.body`)}
          />
        ))}
      </div>
    </section>
  );
}

export default PolicyContentSection;
