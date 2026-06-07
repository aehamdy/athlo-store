import { useTranslations } from "next-intl";
import TermsAndConditionsCard from "./TermsAndConditionsCard";

const sections = [
  "acceptanceOfTerms",
  "useOfSite",
  "accounts",
  "productsAndPricing",
  "ordersAndPayment",
  "shippingAndReturns",
  "intellectualProperty",
  "limitationOfLiability",
  "governingLaw",
  "changesToTerms",
] as const;

function TermsAndConsitionsContent() {
  const t = useTranslations("termsAndConditionsPage");

  return (
    <section className="py-7xl bg-background">
      <div className="flex flex-col items-center gap-3xl mx-auto w-9/10 lg:w-1/2">
        {sections.map((section) => (
          <TermsAndConditionsCard
            key={section}
            title={t(`sections.${section}.title`)}
            body={t(`sections.${section}.body`)}
          />
        ))}
      </div>
    </section>
  );
}

export default TermsAndConsitionsContent;
