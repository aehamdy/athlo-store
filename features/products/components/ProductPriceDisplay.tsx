import { ProductPricesT } from "../types";

type ProductPriceDisplayProps = {
  prices: ProductPricesT;
};

function ProductPriceDisplay({ prices }: ProductPriceDisplayProps) {
  const minPrice = prices.minPrice ?? 0;
  const maxPrice = prices.maxPrice ?? 0;
  const minAfter = prices.minPriceAfterDiscount ?? 0;
  const maxAfter = prices.maxPriceAfterDiscount ?? 0;

  const hasDiscount = minAfter > 0 && minPrice > 0 && minAfter < minPrice;

  return (
    <div className="flex flex-wrap items-center gap-2 text-md">
      {hasDiscount ? (
        <>
          <span className="font-bold text-accent-base">
            {minAfter} EGP
            {maxAfter > minAfter && ` ~ ${maxAfter} EGP`}
          </span>

          <span className="text-sm text-red-500 line-through">
            {minPrice} EGP
            {maxPrice > minPrice && ` ~ ${maxPrice} EGP`}
          </span>
        </>
      ) : (
        <span className="font-bold text-accent-base">
          {minPrice} EGP
          {maxPrice > minPrice && ` ~ ${maxPrice} EGP`}
        </span>
      )}
    </div>
  );
}

export default ProductPriceDisplay;
