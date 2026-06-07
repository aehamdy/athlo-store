import { useTranslations } from "next-intl";
import Heading from "../shared/Heading";

function FAQHero() {
  const t = useTranslations("faqsPage");

  return (
    <section className="relative flex items-center justify-center h-[30dvh] lg:h-[40vh] bg-accent-base/10 overflow-hidden">
      <div className="relative px-md text-center">
        <Heading as="h1" className="mb-sm font-bold text-4xl md:text-5xl">
          {t("title")}
        </Heading>

        <p className="text-lg text-muted-foreground">{t("description")}</p>
      </div>
    </section>
  );
}

export default FAQHero;
