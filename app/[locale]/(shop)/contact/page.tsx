import PageHero from "@/components/layout/PageHero";
import FAQSection from "@/components/contact/FAQSection";
import ContactSection from "@/components/contact/ContactSection";

function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact Us"
        description="Get in touch with us"
        image="url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920)"
      />

      <ContactSection />

      <FAQSection />
    </main>
  );
}

export default ContactPage;
