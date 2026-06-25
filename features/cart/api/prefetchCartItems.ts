import { QueryClient } from "@tanstack/react-query";
import cartQueryKeys from "../constants/cartQueryKeys";
import getCartItems from "./getCartItems";

function prefetchCartItems(queryClient: QueryClient) {
  return queryClient.prefetchQuery({
    queryKey: cartQueryKeys.all,
    queryFn: getCartItems,
  });
}

export default prefetchCartItems;
