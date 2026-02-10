import FilterContent from "@/components/products/FilterContent";
import MobileFilter from "@/components/products/MobileFilter";
import ProductsGrid from "@/components/products/ProductsGrid";
import SortDropdown from "@/components/products/SortDropdown";
import Heading from "@/components/shared/Heading";

function ProductsPage() {
  return (
    <main className="section-spacing">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-3xl">
        <div>
          <Heading as="h1" className="font-bold text-3xl">
            Products
          </Heading>

          <p className="mt-tiny text-muted-foreground">99 Items</p>
        </div>

        <div className="flex justify-between items-center gap-sm">
          <SortDropdown />

          <div className="md:hidden">
            <MobileFilter />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5xl section-spacing-x">
        <aside className="hidden md:block md:col-span-3 shrink-0">
          <div className="sticky top-14">
            <Heading as="h3" className="font-semibold text-lg mb-md">
              Filters
            </Heading>

            <FilterContent />
          </div>
        </aside>

        <div className="col-span-9">
          <ProductsGrid />
        </div>
      </div>
    </main>
  );
}

export default ProductsPage;
