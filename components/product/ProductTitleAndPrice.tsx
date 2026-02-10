"use client";

import Icon from "../shared/Icon";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Heading from "../shared/Heading";
import { Product } from "../products/ProductsGrid";

type ProductTitleAndPriceProps = {
  product: Product;
};

function ProductTitleAndPrice({ product }: ProductTitleAndPriceProps) {
  const { category, name, price, description } = product;
  const [selectedColor, setSelectedColor] = useState(
    product?.colors[0].name || "",
  );

  return (
    <>
      <div>
        <p className="text-sm text-muted-foreground mb-tiny">{category}</p>

        <Heading as="h1" className="mb-sm font-bold text-3xl">
          {name}
        </Heading>

        <p className="font-bold text-3xl text-accent-base">EGP {price}</p>
      </div>

      {/* Description */}
      <p className="text-muted-foreground">{description}</p>

      {/* Color Selection */}
      <div>
        <Label className="block font-medium text-sm mb-sm">
          Color: <span className="text-muted-foreground">{selectedColor}</span>
        </Label>

        <div className="flex gap-sm">
          {product.colors.map((color) => (
            <Button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={cn(
                "flex items-center justify-center w-10 h-10 border-2 rounded-full transition-all",
                selectedColor === color.name
                  ? "border-accent-base scale-110"
                  : "border-subtle hover:border-muted-foreground",
              )}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            >
              {selectedColor === color.name && (
                <Icon
                  name="Check"
                  className={cn(
                    "h-5 w-5",
                    color.hex === "#ffffff" || color.hex === "#e0e0e0"
                      ? "text-foreground"
                      : "text-primary-light",
                  )}
                />
              )}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductTitleAndPrice;
