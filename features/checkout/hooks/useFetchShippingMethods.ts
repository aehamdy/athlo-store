import { useQuery } from "@tanstack/react-query";
import fetchShippingMethods from "../api/fetchShippingMethods";

function useFetchShippingMethods() {
  return useQuery({
    queryKey: ["shipping-methods"],
    queryFn: fetchShippingMethods,
  });
}

export default useFetchShippingMethods;
