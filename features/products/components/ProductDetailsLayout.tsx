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
    <section className="lg:pt-2xl space-y-3xl">
      <div className="grid lg:grid-cols-12 gap-lg">
        {/* Product Images */}
        <div className="lg:col-span-5">
          <ProductImageGallery
            images={product.images}
            productName={product.name}
          />
        </div>

        {/* Product Info */}
        <div className="lg:col-span-7 pt-sm">
          <div className="space-y-md">
            <ProductMetaInfo
              variant="details"
              brand={product.brandName}
              category={product.categoryName}
              season={product.season}
            />

            <ProductTitleDisplay variant="details" title={product.name} />

            <ProductPriceDisplay variant="details" prices={displayedPrices} />

            <ProductDescription description={product.description} />

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
              <ProductStockInfo stockQuantity={selectedVariant.stockQuantity} />
            )}

            <ProductQuantitySelector
              quantity={quantity}
              setQuantity={setQuantity}
              maxQuantity={maxQuantity}
              disabled={!canPurchase}
            />

            <div className="flex items-center gap-lg w-full">
              <div className="w-[85%]">
                <ProductActionButton
                  icon="ShoppingBag"
                  label="Add To Cart"
                  className="w-full py-lg"
                  disabled={!canPurchase || isPending}
                  onClick={handleAddToCart}
                />
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

      <ReviewsSection />
    </section>
  );
}

export default ProductDetailsLayout;
