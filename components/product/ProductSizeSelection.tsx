"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Product } from "../products/ProductsGrid";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

type ProductSizeSelectionProps = {
  product: Product;
};

function ProductSizeSelection({ product }: ProductSizeSelectionProps) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");

  return (
    <div>
      <Label className="block mb-sm font-medium text-sm ">Size:</Label>

      <div className="flex flex-wrap gap-xs">
        {product.sizes.map((size) => (
          <Button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={cn(
              " py-xs px-md font-medium text-sm rounded-lg transition-colors",
              selectedSize === size
                ? "text-primary-dark bg-accent-base hover:bg-accent-soft"
                : "text-foreground hover:text-primary-dark bg-subtle hover:bg-accent-strong",
            )}
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ProductSizeSelection;
