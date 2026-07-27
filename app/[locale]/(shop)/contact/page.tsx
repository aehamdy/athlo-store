import PageHero from "@/components/layout/PageHero";
import appConfig from "@/config/appConfig";
import ContactSection from "@/features/contact/components/ContactSection";
import FAQSection from "@/features/contact/components/FAQSection";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with the ${appConfig.name} team for support, questions, or partnership inquiries.`,
};

function ContactPage() {
  const t = useTranslations("contactPage");

  return (
    <main>
      <PageHero
        title={t("title")}
        description={t("description")}
        image="url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920)"
      />

      <ContactSection />

      <FAQSection />
    </main>
  );
}

export default ContactPage;
