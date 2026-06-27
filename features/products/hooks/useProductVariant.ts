import { useMemo } from "react";
import { ProductDetails, ProductPricesT, ProductVariantT } from "../types";
import mapProductPrices from "../utils/mapProductPrices";

type UseProductVariantProps = {
  product: ProductDetails;
  selectedAttribute: string;
  selectedColor: string;
};

type UseProductVariantReturn = {
  hasAttribute: boolean;
  hasColor: boolean;
  selectedVariant?: ProductVariantT;
  displayedPrices: ProductPricesT;
  canPurchase: boolean;
  maxQuantity: number;
};

function useProductVariant({
  product,
  selectedAttribute,
  selectedColor,
}: UseProductVariantProps): UseProductVariantReturn {
  const variants = useMemo(() => product.variants ?? [], [product.variants]);

  //Determine available option types.
  const hasAttribute = useMemo(
    () =>
      variants.some((variant) => variant.attributeValueEn?.trim().length > 0),
    [variants],
  );

  const hasColor = useMemo(
    () => variants.some((variant) => variant.colorLabel?.trim().length > 0),
    [variants],
  );

  //Find selected variant
  const selectedVariant = useMemo(() => {
    if (variants.length === 0) return undefined;

    if (!hasAttribute && !hasColor) {
      return variants[0];
    }

    return variants.find((variant) => {
      if (hasAttribute && hasColor) {
        return (
          variant.attributeValueEn === selectedAttribute &&
          variant.colorLabel === selectedColor
        );
      }

      if (hasAttribute) {
        return variant.attributeValueEn === selectedAttribute;
      }

      if (hasColor) {
        return variant.colorLabel === selectedColor;
      }

      return false;
    });
  }, [variants, hasAttribute, hasColor, selectedAttribute, selectedColor]);

  //Displayed prices
  const displayedPrices = useMemo<ProductPricesT>(() => {
    if (selectedVariant) {
      return {
        minPrice: selectedVariant.price,
        maxPrice: selectedVariant.price,
        minPriceAfterDiscount: selectedVariant.priceAfterDiscount,
        maxPriceAfterDiscount: selectedVariant.priceAfterDiscount,
      };
    }

    return mapProductPrices(product);
  }, [selectedVariant, product]);

  //Can user purchase?
  const canPurchase = useMemo(() => {
    if (!hasAttribute && !hasColor) {
      return true;
    }

    return !!selectedVariant;
  }, [hasAttribute, hasColor, selectedVariant]);

  //Max quantity
  const maxQuantity = selectedVariant?.stockQuantity ?? 0;

  return {
    hasAttribute,
    hasColor,
    selectedVariant,
    displayedPrices,
    canPurchase,
    maxQuantity,
  };
}

export default useProductVariant;
