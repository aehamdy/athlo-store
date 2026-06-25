import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";

async function deleteCartItem(id: number) {
  const { data } = await api.delete(ENDPOINTS.cart.delete(id));

  return data;
}

export default deleteCartItem;
