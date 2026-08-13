import { useTranslations } from "next-intl";

type ProductStockInfoProps = {
  stockQuantity: number;
};

function ProductStockInfo({ stockQuantity }: ProductStockInfoProps) {
  const t = useTranslations("labels");

  let message: React.ReactNode;
  let color: string;

  if (stockQuantity === 0) {
    message = t("outOfStock");
    color = "text-red-500";
  } else if (stockQuantity <= 5) {
    message = t("lowStock", { count: stockQuantity });
    color = "text-yellow-500";
  } else {
    message = t("available", { count: stockQuantity });
    color = "text-green-600";
  }

  return (
    <div className="flex items-center gap-xs text-sm">
      <span className="font-medium text-foreground">{t("stock")}:</span>

      <span className={color}>{message}</span>
    </div>
  );
}

export default ProductStockInfo;
