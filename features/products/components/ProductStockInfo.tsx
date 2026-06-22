import { ProductVariantT } from "../types";

type ProductStockInfoProps = {
  selectedVariant: ProductVariantT;
};

function ProductStockInfo({ selectedVariant }: ProductStockInfoProps) {
  const quantity = selectedVariant.stockQuantity;

  const stockInfo =
    quantity === 0
      ? { message: "Out of stock", messageColor: "text-red-500" }
      : quantity <= 5
        ? {
            message: `Only ${quantity} left in stock`,
            messageColor: "text-yellow-500",
          }
        : { message: `${quantity} available`, messageColor: "text-green-600" };

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="font-medium text-foreground">Stock:</span>

      <span className={stockInfo.messageColor}>{stockInfo.message}</span>
    </div>
  );
}

export default ProductStockInfo;
