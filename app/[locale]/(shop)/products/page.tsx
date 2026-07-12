import FilterContent from "@/features/products/components/filters/FilterContent";
import SortDropdown from "@/features/products/components/filters/SortDropdown";
import Heading from "@/components/shared/Heading";
import { useTranslations } from "next-intl";
import MobileFilter from "@/features/products/components/filters/MobileFilter";
import ProductsGrid from "@/features/products/components/ProductsGrid";

function ProductsPage() {
  const t = useTranslations("productsPage");

  const itemsCount = 99;

  return (
    <main className="main-page">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-3xl">
        <div>
          <Heading as="h1" className="font-bold text-3xl">
            {t("title")}
          </Heading>

          <p className="mt-tiny text-muted-foreground">
            {itemsCount} {t("items")}
          </p>
        </div>

        <div className="flex justify-between items-center gap-sm">
          <SortDropdown />

          <div className="md:hidden">
            <MobileFilter />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5xl section-spacing-x">
        <aside className="hidden md:block md:col-span-2 shrink-0">
          <div className="sticky top-14">
            <Heading as="h3" className="font-semibold text-lg mb-md">
              {t("filters")}
            </Heading>

            <FilterContent />
          </div>
        </aside>

        <div className="col-span-10">
          <ProductsGrid />
        </div>
      </div>
    </main>
  );
}

export default ProductsPage;
