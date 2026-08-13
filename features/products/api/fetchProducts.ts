import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";
import { PaginatedProductsResponse } from "../types";
import getApiLocale from "@/i18n/locale";

type FetchProductsParams = {
  pageNumber?: number;
  pageSize?: number;
  search?: string;
  ordering?: number;
  locale: string;
};

async function fetchProducts({
  pageNumber,
  pageSize,
  search,
  ordering,
  locale,
}: FetchProductsParams) {
  const apiLocale = getApiLocale(locale);

  const response = await api.get<PaginatedProductsResponse>(
    ENDPOINTS.product.paginated({
      pageNumber,
      pageSize,
      search,
      ordering,
    }),
    {
      headers: {
        "Accept-Language": apiLocale,
      },
    },
  );

  return response.data;
}

export default fetchProducts;
