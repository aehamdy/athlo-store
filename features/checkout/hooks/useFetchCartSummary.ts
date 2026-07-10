import { useQuery } from "@tanstack/react-query";
import fetchCartSummary from "../api/fetchCartSummary";
import cartQueryKeys from "@/features/cart/constants/cartQueryKeys";

function useFetchCartSummary() {
  return useQuery({
    queryKey: cartQueryKeys.summary,
    queryFn: fetchCartSummary,
  });
}

export default useFetchCartSummary;
