import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import fetchProducts from "../api/fetchProducts";

function useSearchProducts(searchTerm: string) {
  const locale = useLocale();

  return useQuery({
    queryKey: ["search-products", searchTerm, locale],

    queryFn: () =>
      fetchProducts({
        pageNumber: 1,
        pageSize: 10,
        search: searchTerm,
        locale,
      }),

    enabled: !!searchTerm.trim(),
  });
}

export default useSearchProducts;
