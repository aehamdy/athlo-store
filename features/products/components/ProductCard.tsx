import Image from "next/image";
import Heading from "@/components/shared/Heading";
import { ProductT } from "../types";
import ProductActions from "./ProductActions";

type ProductCardProps = {
  product: ProductT;
};

function ProductCard({ product }: ProductCardProps) {
  const hasDiscount =
    product.minPriceAfterDiscount !== undefined &&
    product.minPrice !== undefined &&
    product.minPriceAfterDiscount > 0 &&
    product.minPriceAfterDiscount < product.minPrice;

  return (
    <article className="group overflow-hidden rounded-2xl border bg-surface transition-shadow duration-normal hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.images[0] || "/images/placeholder.png"}
          alt={product.name}
          width={300}
          height={300}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-slow"
        />

        <ProductActions />
      </div>

      {/* Info */}
      <div className="border-t p-4 bg-gray-50">
        <p className="mb-1 text-xs text-muted-foreground">
          {product.brandName} • {product.categoryName}
        </p>

        <Heading
          as="h3"
          className="mb-2 line-clamp-1 text-sm font-medium transition-colors group-hover:text-primary"
        >
          {product.name}
        </Heading>

        <div className="flex flex-wrap items-center gap-2">
          {hasDiscount ? (
            <>
              <span className="text-lg font-bold text-primary">
                {product.maxPriceAfterDiscount &&
                  product.minPriceAfterDiscount &&
                  product.maxPriceAfterDiscount >
                    product.minPriceAfterDiscount &&
                  ` ~ ${product.maxPriceAfterDiscount} EGP`}
              </span>

              <span className="text-sm text-muted-foreground line-through">
                {product.maxPrice !== undefined &&
                  product.minPrice !== undefined &&
                  product.maxPrice > product.minPrice &&
                  ` ~ ${product.maxPrice} EGP`}
              </span>
            </>
          ) : (
            <span className="text-lg font-bold text-primary">
              {product.minPriceAfterDiscount} EGP
              {product.maxPriceAfterDiscount !== undefined &&
                product.minPriceAfterDiscount !== undefined &&
                product.maxPriceAfterDiscount > product.minPriceAfterDiscount &&
                ` ~ ${product.maxPriceAfterDiscount} EGP`}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
