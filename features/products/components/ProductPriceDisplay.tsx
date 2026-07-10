import { ProductPricesT, ProductViewVariant } from "../types";
import Currency from "./Currency";

type ProductPriceDisplayProps = {
  prices: ProductPricesT;
  variant?: ProductViewVariant;
};

function ProductPriceDisplay({ variant, prices }: ProductPriceDisplayProps) {
  const minPrice = prices.minPrice ?? 0;
  const maxPrice = prices.maxPrice ?? 0;
  const minAfter = prices.minPriceAfterDiscount ?? 0;
  const maxAfter = prices.maxPriceAfterDiscount ?? 0;

  const hasDiscount = minAfter > 0 && minPrice > 0 && minAfter < minPrice;

  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${variant === "details" ? "text-xl" : "text-md"}`}
    >
      {hasDiscount ? (
        <>
          <span className="font-bold text-accent-base">
            <Currency price={minAfter} />

            {maxAfter > minAfter && (
              <>
                {" ~ "}
                <Currency price={maxAfter} />
              </>
            )}
          </span>

          <span className="text-sm text-red-500 line-through">
            <Currency price={minPrice} />

            {maxPrice > minPrice && (
              <>
                {" ~ "}
                <Currency price={maxPrice} />
              </>
            )}
          </span>
        </>
      ) : (
        <span className="font-bold text-accent-base">
          <Currency price={minPrice} />
          {maxPrice > minPrice && (
            <>
              {" ~ "}
              <Currency price={maxPrice} />
            </>
          )}
        </span>
      )}
    </div>
  );
}

export default ProductPriceDisplay;
