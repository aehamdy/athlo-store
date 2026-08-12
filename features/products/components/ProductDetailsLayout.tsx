"use client";

import { useState } from "react";

import ProductImageGallery from "./ProductImageGallery";
import ProductPriceDisplay from "./ProductPriceDisplay";
import ProductTitleDisplay from "./ProductTitleDisplay";
import ProductMetaInfo from "./ProductMetaInfo";
import ProductDescription from "./ProductDescription";
import ProductAttributeSelector from "./ProductAttributeSelector";
import ProductColorSelector from "./ProductColorSelector";
import ProductStockInfo from "./ProductStockInfo";
import ProductQuantitySelector from "./ProductQuantitySelector";
import ProductActionButton from "./ProductActionButton";

import { ProductDetails } from "../types";
import useHandleAddToCart from "@/features/cart/hooks/useHandleAddToCart";
import useProductVariant from "../hooks/useProductVariant";
import ReviewsSection from "../reviews/components/ReviewsSection";
import Share from "./Share";

type ProductDetailsLayoutProps = {
  product: ProductDetails;
};

function ProductDetailsLayout({ product }: ProductDetailsLayoutProps) {
  const [selectedAttribute, setSelectedAttribute] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { addProduct, isPending } = useHandleAddToCart();

  const {
    hasAttribute,
    hasColor,
    selectedVariant,
    displayedPrices,
    canPurchase,
    maxQuantity,
  } = useProductVariant({
    product,
    selectedAttribute,
    selectedColor,
  });

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    addProduct(selectedVariant.id, quantity);
  };

  return (
    <section className="relative lg:pt-2xl space-y-3xl">
      {/* Ambient background */}
      <div className="pointer-events-none absolute top-40 md:top-135 lg:-top-40 start-1/2 lg:start-1/4 -translate-x-1/2 lg:translate-x-0 h-115 w-115 rounded-full bg-accent-base/20 blur-[140px]" />
      <div className="pointer-events-none absolute top-6/10 md:top-7/10 lg:top-6/10 end-0 h-90 w-90 rounded-full bg-accent-base/30 blur-[160px]" />

      <div className="grid lg:grid-cols-12 gap-lg">
        {/* Product Images */}
        <div className="lg:col-span-5">
          <ProductImageGallery
            images={product.images}
            productName={product.name}
          />
        </div>

        {/* Product Info */}
        <div className="lg:col-span-7 h-full py-sm px-xs md:px-md bg-surface border border-subtle rounded-xl">
          <div className="space-y-lg">
            <ProductMetaInfo
              variant="details"
              brand={product.brandName}
              category={product.categoryName}
              season={product.season}
            />

            <ProductTitleDisplay variant="details" title={product.name} />

            <ProductPriceDisplay variant="details" prices={displayedPrices} />

            <ProductDescription description={product.description} />

            <div className="space-y-lg py-lg px-sm bg-accent-light rounded-xl">
              {hasAttribute && (
                <ProductAttributeSelector
                  attributeKey={product.attributeKey}
                  unit={product.variants[0]?.unit ?? ""}
                  product={product}
                  selectedAttribute={selectedAttribute}
                  setSelectedAttribute={setSelectedAttribute}
                  setSelectedColor={setSelectedColor}
                />
              )}

              {hasColor && (
                <ProductColorSelector
                  product={product}
                  selectedAttribute={selectedAttribute}
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                />
              )}

              {canPurchase && selectedVariant && (
                <ProductStockInfo
                  stockQuantity={selectedVariant.stockQuantity}
                />
              )}

              <ProductQuantitySelector
                quantity={quantity}
                setQuantity={setQuantity}
                maxQuantity={maxQuantity}
                disabled={!canPurchase}
              />

              <div className="flex items-center gap-lg w-full">
                <div className="flex justify-between lg:justify-evenly items-center gap-sm w-full">
                  <ProductActionButton
                    icon="ShoppingBag"
                    label="Add To Cart"
                    className="w-[85%] py-lg"
                    disabled={!canPurchase || isPending}
                    onClick={handleAddToCart}
                  />

                  <Share productTitle={product.name} />
                </div>

                {/* <ProductActionButton
                variant="icon"
                tooltip="top"
                icon="Heart"
                label="Add to wishlist"
                className="shrink-0"
                onClick={() => {}}
              /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <ReviewsSection />
      </div>
    </section>
  );
}

export default ProductDetailsLayout;
