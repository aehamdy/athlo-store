import ProductCard from "@/features/products/components/ProductCard";
import { products } from "./FeaturedProducts";
import { useTranslations } from "next-intl";
import ROUTES from "@/lib/routes";
import SectionHeader from "@/components/shared/SectionHeader";

function NewArrivals() {
  const newProducts = products.filter((p) => p.isNew).slice(0, 4);
  const t = useTranslations("home.newArrivals");
  const actionsT = useTranslations("actions");

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeader
          sectionTitle={t("title")}
          linkText={actionsT("viewAll")}
          href={ROUTES.public.products}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
