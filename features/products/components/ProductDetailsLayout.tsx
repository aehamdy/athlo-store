"use client";

import ProductImageGallery from "@/features/products/components/ProductImageGallery";
import { ProductT } from "../types";
import ProductPriceDisplay from "./ProductPriceDisplay";
import ProductTitleDisplay from "./ProductTitleDisplay";
import ProductMetaInfo from "./ProductMetaInfo";
import { useState } from "react";
import mapProductPrices from "../utils/mapProductPrices";
import ProductDescription from "./ProductDescription";
import ProductAttributeSelector from "./ProductAttributeSelector";
import ProductColorSelector from "./ProductColorSelector";
import ProductStockInfo from "./ProductStockInfo";
import ProductQuantitySelector from "./ProductQuantitySelector";
import ProductActionButton from "./ProductActionButton";
import useHandleAddToCart from "@/features/cart/hooks/useHandleAddToCart";

type ProductDetailsLayoutProps = {
  product: ProductT;
};

function ProductDetailsLayout({ product }: ProductDetailsLayoutProps) {
  const [selectedAttribute, setSelectedAttribute] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { addProduct, isPending } = useHandleAddToCart();

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

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    addProduct(selectedVariant.id, quantity);
  };

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

            <ProductDescription description={product.description} />

            <ProductAttributeSelector
              attributeKey={product.attributeKey}
              product={product}
              selectedAttribute={selectedAttribute}
              setSelectedAttribute={setSelectedAttribute}
              setSelectedColor={setSelectedColor}
            />

            <ProductColorSelector
              selectedColor={selectedColor}
              selectedAttribute={selectedAttribute}
              product={product}
              setSelectedColor={setSelectedColor}
            />

            {selectedVariant && (
              <ProductStockInfo selectedVariant={selectedVariant} />
            )}

            <ProductQuantitySelector
              quantity={quantity}
              setQuantity={setQuantity}
              selectedVariant={selectedVariant}
            />

            <div className="flex items-center gap-lg w-full">
              <div className="w-[85%]">
                <ProductActionButton
                  icon="ShoppingBag"
                  label="Add To Cart"
                  className="flex-1 py-lg w-full"
                  disabled={!selectedVariant || isPending}
                  onClick={handleAddToCart}
                />
              </div>

              <ProductActionButton
                variant="icon"
                tooltip="top"
                icon="Heart"
                label="Add to wishlist"
                className="shrink-0"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsLayout;
