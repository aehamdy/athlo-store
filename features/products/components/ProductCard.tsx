import Image from "next/image";
import { ProductT } from "../types";
import ProductActions from "./ProductActions";
import ProductCardInfo from "./ProductCardInfo";

type ProductCardProps = {
  product: ProductT;
};

function ProductCard({ product }: ProductCardProps) {
  const prices = {
    basePrice: product.basePrice,
    minPrice: product.minPrice,
    maxPrice: product.maxPrice,
    priceAfterDiscount: product.priceAfterDiscount,
    minPriceAfterDiscount: product.minPriceAfterDiscount,
    maxPriceAfterDiscount: product.maxPriceAfterDiscount,
  };
  console.log(product);
  return (
    <article className="group overflow-hidden rounded-2xl border bg-surface transition-shadow duration-normal hover:shadow-lg">
      <div className="relative aspect-square bg-white overflow-hidden">
        <Image
          src={product.images[0] || "/images/placeholder.png"}
          alt={product.name}
          width={300}
          height={300}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-slow"
        />

        <ProductActions />
      </div>

      <ProductCardInfo
        name={product.name}
        brand={product.brandName}
        category={product.categoryName}
        season={product.season && product.season}
        prices={prices}
      />
    </article>
  );
}

export default ProductCard;
