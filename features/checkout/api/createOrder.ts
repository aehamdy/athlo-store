import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";
import { CreateOrderRequest } from "../types";

async function createOrder(payload: CreateOrderRequest) {
  const response = await api.post(ENDPOINTS.order.create, payload);

  return response.data;
}

export default createOrder;
