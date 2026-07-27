import appConfig from "@/config/appConfig";
import PolicyContentSection from "@/features/privacy-policy/components/PolicyContentSection";
import PrivacyPolicyHero from "@/features/privacy-policy/components/PrivacyPolicyHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Read ${appConfig.name}'s Privacy Policy to learn how we collect, use, and protect your personal information.`,
};

function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicyHero />
      <PolicyContentSection />
    </main>
  );
}

export default PrivacyPolicyPage;
