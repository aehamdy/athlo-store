import { useQuery } from "@tanstack/react-query";
import cartQueryKeys from "../constants/cartQueryKeys";
import getCartSummary from "../api/getCartSummary";

function useGetCartSummary(enabled: boolean) {
  return useQuery({
    queryKey: cartQueryKeys.summary,
    queryFn: getCartSummary,
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export default useGetCartSummary;
