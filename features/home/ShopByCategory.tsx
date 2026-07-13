import SectionHeader from "@/components/shared/SectionHeader";
import CategoriesSlider from "./components/CategoriesWrapper";
import { useTranslations } from "next-intl";

function ShopByCategory() {
  const t = useTranslations("home.shopByCategory");

  return (
    <section className="py-16 bg-background">
      {/* <div className="container mx-auto px-4"> */}
      <SectionHeader sectionTitle={t("title")} headingLevel="h2" />

      <CategoriesSlider />
      {/* </div> */}
    </section>
  );
}

export default ShopByCategory;
