"use client";

import { ProductT } from "../types";
import ProductActions from "./ProductActions";
import ProductCardInfo from "./ProductCardInfo";
import Link from "next/link";
import ROUTES from "@/lib/routes";
import mapProductPrices from "../utils/mapProductPrices";
import AppImage from "@/components/shared/AppImage";

type ProductCardProps = {
  product: ProductT;
  variant?: string;
  onClick?: () => void;
};

function ProductCard({ product, variant, onClick }: ProductCardProps) {
  const prices = mapProductPrices(product);

  return (
    <article className="group relative bg-surface border hover:border-accent-ring rounded-2xl hover:shadow-lg transition-shadow duration-normal overflow-hidden">
      <Link
        href={ROUTES.public.productDetail(product.id.toString())}
        className="focus-visible:bg-red-500 focus-visible:shadow-lg"
        onClick={onClick}
      >
        <div className="aspect-square bg-white overflow-hidden">
          <AppImage
            productImage={product.images[0]}
            altText={product.name}
            className="group-hover:scale-105"
          />
        </div>

        <ProductCardInfo
          variant={variant}
          name={product.name}
          brand={product.brandName}
          category={product.categoryName}
          season={product.season && product.season}
          prices={prices}
        />
      </Link>

      {variant !== "search" && (
        <ProductActions product={product} hasVariants={product.hasVariants} />
      )}
    </article>
  );
}

export default ProductCard;
