import appConfig from "@/config/appConfig";
import TermsAndConditionsHero from "@/features/termsAndConditions/components/TermsAndConditionsHero";
import TermsAndConsitionsContent from "@/features/termsAndConditions/components/TermsAndConsitionsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Read ${appConfig.name}'s Terms and Conditions governing the use of our website, products, and services.`,
};

function TermsAndConditionsPage() {
  return (
    <main>
      <TermsAndConditionsHero />
      <TermsAndConsitionsContent />
    </main>
  );
}

export default TermsAndConditionsPage;
