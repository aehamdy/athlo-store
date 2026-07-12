import { useQuery } from "@tanstack/react-query";
import cartQueryKeys from "../constants/cartQueryKeys";
import getCartItems from "../api/getCartItems";

function useFetchCartItems() {
// enabled = true
  return useQuery({
    queryKey: cartQueryKeys.items,
    queryFn: getCartItems,
    // enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export default useFetchCartItems;
