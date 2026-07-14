import InfiniteProducts from "./InfiniteProducts";
import fetchProducts from "../api/fetchProducts";

type ProductsGridProps = {
  category?: string;
  search?: string;
  ordering?: number;
};

async function ProductsGrid({ category, search, ordering }: ProductsGridProps) {
  const backendSearch = category || search;

  const initialData = await fetchProducts({
    pageNumber: 1,
    pageSize: 20,
    search: backendSearch,
    ordering,
  });

  return (
    <section className="flex-1 h-full">
      <InfiniteProducts
        key={`${backendSearch ?? "all"}-${ordering ?? 0}`}
        initialData={initialData}
        search={backendSearch}
        ordering={ordering}
      />
    </section>
  );
}

export default ProductsGrid;
