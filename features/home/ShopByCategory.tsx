import SectionHeader from "@/components/shared/SectionHeader";
import CategoriesSlider from "./components/CategoriesWrapper";
import { useTranslations } from "next-intl";

function ShopByCategory() {
  const t = useTranslations("home.shopByCategory");

  return (
    <section className="py-16 bg-background">
      <SectionHeader sectionTitle={t("title")} headingLevel="h2" />

      <CategoriesSlider />
    </section>
  );
}

export default ShopByCategory;
