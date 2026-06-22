"use client";

import ProductImageGallery from "@/features/products/components/ProductImageGallery";
import { ProductT } from "../types";
import ProductPriceDisplay from "./ProductPriceDisplay";
import ProductTitleDisplay from "./ProductTitleDisplay";
import ProductMetaInfo from "./ProductMetaInfo";
import { useState } from "react";
import mapProductPrices from "../utils/mapProductPrices";

type ProductDetailsLayoutProps = {
  product: ProductT;
};

function ProductDetailsLayout({ product }: ProductDetailsLayoutProps) {
  const [selectedAttribute, setSelectedAttribute] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const selectedVariant =
    product.variants?.find(
      (variant) =>
        variant.attributeValueEn === selectedAttribute &&
        variant.colorLabel === selectedColor,
    ) ?? null;

  const displayedVariant =
    selectedVariant ??
    product.variants?.find(
      (variant) => variant.attributeValueEn === selectedAttribute,
    );

  const displayedPrices = displayedVariant
    ? {
        minPrice: displayedVariant.price,
        maxPrice: displayedVariant.price,
        minPriceAfterDiscount: displayedVariant.priceAfterDiscount,
        maxPriceAfterDiscount: displayedVariant.priceAfterDiscount,
      }
    : mapProductPrices(product);

  return (
    <section>
      <div className="grid lg:grid-cols-12 gap-lg">
        <div className="lg:col-span-5">
          <ProductImageGallery
            images={product.images}
            productName={product.name}
          />
        </div>

        <div className="lg:col-span-7 pt-sm">
          <div className="space-y-md">
            <ProductMetaInfo
              variant="details"
              brand={product.brandName}
              season={product.season}
              category={product.categoryName}
            />

            <ProductTitleDisplay variant="details" title={product.name} />

            <ProductPriceDisplay variant="details" prices={displayedPrices} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsLayout;
