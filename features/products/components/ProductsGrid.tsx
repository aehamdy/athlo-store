import InfiniteProducts from "./InfiniteProducts";
import fetchProducts from "../api/fetchProducts";

type ProductsGridProps = {
  category?: string;
};

async function ProductsGrid({ category }: ProductsGridProps) {
  const initialData = await fetchProducts({
    pageNumber: 1,
    pageSize: 20,
    search: category,
  });

  return (
    <section className="flex-1 h-full">
      <InfiniteProducts initialData={initialData} category={category} />
    </section>
  );
}

export default ProductsGrid;
