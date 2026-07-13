import { useTranslations } from "next-intl";
import ROUTES from "@/lib/routes";
import SectionHeader from "@/components/shared/SectionHeader";
import NewArrivalsWrapper from "./NewArrivalsWrapper";

function NewArrivals() {
  const t = useTranslations("home.newArrivals");
  const actionsT = useTranslations("actions");

  return (
    <section className="py-16 bg-base">
      <div className="container mx-auto px-4">
        <SectionHeader
          sectionTitle={t("title")}
          linkText={actionsT("viewAll")}
          href={ROUTES.public.products}
        />

        <NewArrivalsWrapper />
      </div>
    </section>
  );
}

export default NewArrivals;
