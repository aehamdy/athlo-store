import FilterContent from "@/features/products/components/filters/FilterContent";
import SortDropdown from "@/features/products/components/filters/SortDropdown";
import Heading from "@/components/shared/Heading";
import MobileFilter from "@/features/products/components/filters/MobileFilter";
import ProductsGrid from "@/features/products/components/ProductsGrid";
import { getTranslations } from "next-intl/server";

type ProductsPageProps = {
  searchParams: Promise<{
    category?: string;
    brand?: string;
    search?: string;
    ordering?: string;
  }>;
};

async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category, brand, search, ordering } = await searchParams;
  const t = await getTranslations("productsPage");

  return (
    <main className="main-page">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-md mb-3xl">
        <div>
          <Heading as="h1" className="font-bold text-3xl text-foreground">
            {t("title")}
          </Heading>
        </div>

        <div className="flex justify-between items-center gap-sm">
          <SortDropdown />

          <div className="lg:hidden">
            <MobileFilter />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-5xl section-spacing-x">
        <aside className="hidden lg:block lg:col-span-2 shrink-0">
          <div className="sticky top-14">
            <Heading
              as="h3"
              className="mb-md font-semibold text-lg text-foreground"
            >
              {t("filters")}
            </Heading>

            <FilterContent />
          </div>
        </aside>

        <div className="lg:col-span-10">
          <ProductsGrid
            category={category}
            brand={brand}
            search={search}
            ordering={ordering ? Number(ordering) : undefined}
          />
        </div>
      </div>
    </main>
  );
}

export default ProductsPage;
