import SectionHeader from "@/components/shared/SectionHeader";
import { useTranslations } from "next-intl";
import CategoriesWrapper from "./CategoriesWrapper";

function ShopByCategory() {
  const t = useTranslations("home.shopByCategory");

  return (
    <section className="py-16 bg-background">
      <SectionHeader sectionTitle={t("title")} headingLevel="h2" />

      <CategoriesWrapper />
    </section>
  );
}

export default ShopByCategory;
