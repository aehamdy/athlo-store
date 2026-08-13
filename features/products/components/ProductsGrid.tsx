import InfiniteProducts from "./InfiniteProducts";
import fetchProducts from "../api/fetchProducts";

type ProductsGridProps = {
  locale: string;
  category?: string;
  brand?: string;
  search?: string;
  ordering?: number;
};

async function ProductsGrid({
  locale,
  category,
  brand,
  search,
  ordering,
}: ProductsGridProps) {
  const backendSearch = category || search || brand;

  const initialData = await fetchProducts({
    pageNumber: 1,
    pageSize: 20,
    search: backendSearch,
    ordering,
    locale,
  });

  return (
    <section className="flex-1 h-full">
      <InfiniteProducts
        key={`${backendSearch ?? "all"}-${ordering ?? 0}-${locale}`}
        initialData={initialData}
        search={backendSearch}
        ordering={ordering}
        locale={locale}
      />
    </section>
  );
}

export default ProductsGrid;
