import { api } from "@/lib/api";
import { UpdateCartItemQuantityPayload } from "../types";
import { ENDPOINTS } from "@/config/endpoints";

async function updateCartItemQuantity(payload: UpdateCartItemQuantityPayload) {
  return api.put(ENDPOINTS.cart.updateQuantity, payload);
}

export default updateCartItemQuantity;
