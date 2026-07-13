import { ENDPOINTS } from "@/config/endpoints";
import { PaginatedProductsResponse } from "@/features/products/types";
import { api } from "@/lib/api";

async function fetchNewArrivals() {
  const response = await api.get<PaginatedProductsResponse>(
    ENDPOINTS.product.paginated({ pageNumber: 1, pageSize: 4 }),
  );

  return response.data.data;
}

export default fetchNewArrivals;
