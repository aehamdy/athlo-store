import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";

async function getCartItems() {
  const { data } = await api.get(ENDPOINTS.cart.list);

  return data.data;
}

export default getCartItems;
