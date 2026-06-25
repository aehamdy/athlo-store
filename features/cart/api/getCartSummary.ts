import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";

async function getCartSummary() {
  const { data } = await api.get(ENDPOINTS.cart.summary);

  return data.data;
}

export default getCartSummary;
