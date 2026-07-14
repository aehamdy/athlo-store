import { useQuery } from "@tanstack/react-query";
import fetchMyOrders from "../api/fetchMyOrders";

function useFetchMyOrders() {
  return useQuery({
    queryKey: ["my-orders"],
    queryFn: fetchMyOrders,
  });
}

export default useFetchMyOrders;
