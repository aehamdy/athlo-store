export type ProductCartItem = {
  id: number;
  productVariantId: number;
  productName: string;
  productImageUrl: string;
  sku: string;
  attributeKey: string;
  attributeValue: string;
  unit: string;
  colorLabel: string;
  colorHex: string;
  originalPrice: number;
  finalPrice: number;
  quantity: number;
  stockQuantity: number;
  totalPrice: number;
};

export type UpdateCartItemQuantityPayload = {
  id: number;
  quantity: number;
};
