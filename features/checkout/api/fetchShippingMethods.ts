import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";
import { ShippingMethod } from "../types";

async function fetchShippingMethods(): Promise<ShippingMethod[]> {
  const response = await api.get(ENDPOINTS.shippingMethod.list);

  return response.data.data;
}

export default fetchShippingMethods;
