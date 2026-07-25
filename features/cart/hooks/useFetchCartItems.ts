import { useQuery } from "@tanstack/react-query";
import cartQueryKeys from "../constants/cartQueryKeys";
import getCartItems from "../api/getCartItems";
import { useAuthStore } from "@/lib/stores/auth.store";

function useFetchCartItems() {
  const isLoggedIn = useAuthStore((state) => state.isAuthenticated);

  return useQuery({
    queryKey: cartQueryKeys.items,
    queryFn: getCartItems,
    enabled: isLoggedIn,
    staleTime: 1000 * 60 * 5,
  });
}

export default useFetchCartItems;
