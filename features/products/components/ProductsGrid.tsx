import InfiniteProducts from "./InfiniteProducts";
import { ProductT } from "@/features/products/types";
import fetchProducts from "../api/fetchProducts";

export type PaginatedProductsResponse = {
  data: ProductT[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageSize: number;
};

async function ProductsGrid() {
  const initialData = await fetchProducts({
    pageNumber: 1,
    pageSize: 20,
  });

  return (
    <section className="flex-1">
      <InfiniteProducts initialData={initialData} />
    </section>
  );
}

export default ProductsGrid;
