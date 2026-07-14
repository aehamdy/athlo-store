import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";
import { ApiResponse, MyOrderT } from "../types";

async function fetchMyOrders() {
  const response = await api.get<ApiResponse<MyOrderT[]>>(
    ENDPOINTS.order.orderHistory,
  );

  return response.data;
}

export default fetchMyOrders;
