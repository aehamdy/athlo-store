import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";

export type AddToCartPayload = {
  productVariantId: number;
  quantity: number;
};

async function addToCart(payload: AddToCartPayload) {
  const { data } = await api.post(ENDPOINTS.cart.add, payload);

  return data;
}

export default addToCart;
