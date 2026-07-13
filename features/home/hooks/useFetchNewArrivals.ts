import { useQuery } from "@tanstack/react-query";
import fetchNewArrivals from "../api/fetchNewArrivals";

function useFetchNewArrivals() {
  return useQuery({
    queryKey: ["products", "new-arrivals"],
    queryFn: () => fetchNewArrivals(),
    staleTime: 1000 * 60 * 10,
  });
}

export default useFetchNewArrivals;
