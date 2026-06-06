import PageHero from "@/components/layout/PageHero";
import FAQSection from "@/components/contact/FAQSection";
import ContactSection from "@/components/contact/ContactSection";
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
