import FilterContent from "@/features/products/components/filters/FilterContent";
import SortDropdown from "@/features/products/components/filters/SortDropdown";
import Heading from "@/components/shared/Heading";
import MobileFilter from "@/features/products/components/filters/MobileFilter";
import ProductsGrid from "@/features/products/components/ProductsGrid";
import { getLocale, getTranslations } from "next-intl/server";
import ProductsGridViewSelector from "@/features/products/components/filters/ProductsGridViewSelector";
import { Metadata } from "next";
import appConfig from "@/config/appConfig";

export const metadata: Metadata = {
  title: "Products",
  description: `Browse ${appConfig.name}'s collection of premium sportswear, footwear, and fitness accessories for men and women.`,
};

type ProductsPageProps = {
  searchParams: Promise<{
    category?: string;
    brand?: string;
    search?: string;
    ordering?: string;
  }>;
};

async function ProductsPage({ searchParams }: ProductsPageProps) {
  const t = await getTranslations("productsPage");
  const locale = await getLocale();

  const { category, brand, search, ordering } = await searchParams;

  return (
    <main className="main-page">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-md mb-3xl">
        <div>
          <Heading as="h1" className="font-bold text-3xl text-foreground">
            {t("title")}
          </Heading>
        </div>

        <div className="flex justify-between items-center gap-sm">
          <div className="flex items-center gap-xl">
            <div className="hidden lg:block">
              <ProductsGridViewSelector />
            </div>

            <SortDropdown />
          </div>

          <div className="lg:hidden">
            <MobileFilter />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-md">
        <aside className="hidden lg:block lg:col-span-2 shrink-0 p-sm bg-surface rounded-md">
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
            locale={locale}
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
