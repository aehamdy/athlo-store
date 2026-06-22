import ProductMetaInfo from "./ProductMetaInfo";
import ProductPriceDisplay from "./ProductPriceDisplay";
import { ProductPricesT } from "../types";
import ProductTitleDisplay from "./ProductTitleDisplay";

type ProductCardInfoProps = {
  name: string;
  brand?: string;
  category?: string;
  season?: string;
  prices: ProductPricesT;
};

function ProductCardInfo({
  name,
  brand,
  category,
  season,
  prices,
}: ProductCardInfoProps) {
  return (
    <div dir="ltr" className="border-t p-4 space-y-3 bg-base">
      <ProductMetaInfo
        variant="card"
        brand={brand}
        season={season}
        category={category}
      />

      <ProductTitleDisplay variant="card" title={name} />

      <ProductPriceDisplay prices={prices} />
    </div>
  );
}

export default ProductCardInfo;
