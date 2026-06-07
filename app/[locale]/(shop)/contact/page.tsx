import PageHero from "@/components/layout/PageHero";
import ContactSection from "@/features/contact/components/ContactSection";
import FAQSection from "@/features/contact/components/FAQSection";
import { useTranslations } from "next-intl";

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
