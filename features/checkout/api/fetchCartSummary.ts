import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";

async function fetchCartSummary() {
  const response = await api.get(ENDPOINTS.cart.summary);

  return response.data.data;
}

export default fetchCartSummary;
