import appConfig from "@/config/appConfig";
import FAQContent from "@/features/faqs/components/FAQContent";
import FAQHero from "@/features/faqs/components/FAQHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Find answers to common questions about orders, shipping, returns, payments, and ${appConfig.name} products.`,
};

function FAQsPage() {
  return (
    <main>
      <FAQHero />

      <FAQContent />
    </main>
  );
}

export default FAQsPage;
