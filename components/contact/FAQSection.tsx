import Heading from "../shared/Heading";
import Link from "next/link";
import ROUTES from "@/lib/routes";
import { useTranslations } from "next-intl";

function FAQSection() {
  const t = useTranslations("faqsPage");
  const labelsT = useTranslations("labels");

  return (
    <section className="section-spacing bg-surface">
      <div className="flex flex-col items-center gap-md">
        <div className="flex flex-col items-center gap-xs">
          <Heading className="text-2xl font-bold">{t("haveQuestions")}</Heading>

          <p className="w-full md:w-3/4 text-center text-muted-foreground">
            {t("checkFaqs")}
          </p>
        </div>

        <Link
          href={ROUTES.public.faqs}
          className="w-fit p-sm text-center text-xs text-foreground hover:text-primary-dark bg-base hover:bg-accent-soft active:bg-accent-strong rounded-sm hover:shadow-sm active:shadow-none transition-colors duration-normal"
        >
          {labelsT("viewFaqs")}
        </Link>
      </div>
    </section>
  );
}

export default FAQSection;
