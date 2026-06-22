import getProducts from "@/features/products/api/getProducts";
import InfiniteProducts from "./InfiniteProducts";
import { ProductT } from "@/features/products/types";

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
  const initialData = await getProducts({
    pageNumber: 1,
    pageSize: 20,
  });

  return (
    <section className="flex-1">
      <InfiniteProducts
        initialProducts={initialData.data}
        initialPage={initialData.currentPage}
        hasNextPage={initialData.hasNextPage}
      />
    </section>
  );
}

export default ProductsGrid;
