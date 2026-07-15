import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";
import { PaginatedProductsResponse } from "../types";

type GetProductsParams = {
  pageNumber?: number;
  pageSize?: number;
  search?: string;
  ordering?: number;
};

async function fetchProducts(params: GetProductsParams = {}) {
  const response = await api.get<PaginatedProductsResponse>(
    ENDPOINTS.product.paginated(params),
  );

  return response.data;
}

export default fetchProducts;
