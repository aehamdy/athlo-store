type ProductStockInfoProps = {
  stockQuantity: number;
};

function ProductStockInfo({ stockQuantity }: ProductStockInfoProps) {
  let stockInfo;

  if (stockQuantity === 0) {
    stockInfo = {
      message: "Out of stock",
      color: "text-red-500",
    };
  } else if (stockQuantity <= 5) {
    stockInfo = {
      message: `Only ${stockQuantity} left in stock`,
      color: "text-yellow-500",
    };
  } else {
    stockInfo = {
      message: `${stockQuantity} available`,
      color: "text-green-600",
    };
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="font-medium text-foreground">Stock:</span>

      <span className={stockInfo.color}>{stockInfo.message}</span>
    </div>
  );
}

export default ProductStockInfo;
