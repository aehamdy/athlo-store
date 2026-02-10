"use client";

import { Product } from "../products/ProductsGrid";
import { Badge } from "../ui/badge";

type ProductInfoProps = {
  product: Product;
};

function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-xl">
      {/* Badges */}
      <div className="flex gap-xs">
        {product.isNew && (
          <Badge className="py-tiny px-sm font-semibold text-xs text-primary-dark bg-accent-base rounded-xl">
            New
          </Badge>
        )}

        {product.isFeatured && (
          <Badge className="py-tiny px-sm text-xs font-semibold text-secondary-foreground bg-subtle rounded-xl">
            Featured
          </Badge>
        )}
      </div>
    </div>
  );
}

export default ProductInfo;
