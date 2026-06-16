import { ENDPOINTS } from "@/config/endpoints";
import { PaginatedProductsResponse } from "@/features/product/components/ProductsGrid";
import { api } from "@/lib/api";

type GetProductsParams = {
  pageNumber?: number;
  pageSize?: number;
  search?: string;
  ordering?: number;
};

async function getProducts(params: GetProductsParams = {}) {
  const response = await api.get<PaginatedProductsResponse>(
    ENDPOINTS.product.paginated(params),
  );
  return response.data;
}

export default getProducts;
