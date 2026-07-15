import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../api/fetchProducts";

function useSearchProducts(searchTerm: string) {
  return useQuery({
    queryKey: ["search-products", searchTerm],
    queryFn: () =>
      fetchProducts({
        pageNumber: 1,
        pageSize: 10,
        search: searchTerm,
      }),
    enabled: !!searchTerm.trim(),
  });
}

export default useSearchProducts;
