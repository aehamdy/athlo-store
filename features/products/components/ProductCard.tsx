import Image from "next/image";
import { ProductT } from "../types";
import ProductActions from "./ProductActions";
import ProductCardInfo from "./ProductCardInfo";
import Link from "next/link";
import ROUTES from "@/lib/routes";
import mapProductPrices from "../utils/mapProductPrices";

type ProductCardProps = {
  product: ProductT;
};

function ProductCard({ product }: ProductCardProps) {
  const prices = mapProductPrices(product);

  return (
    <article className="group relative bg-surface border hover:border-accent-ring rounded-2xl hover:shadow-lg transition-shadow duration-normal overflow-hidden">
      <Link
        href={ROUTES.public.productDetail(product.id.toString())}
        className="focus-visible:bg-red-500 focus-visible:shadow-lg"
      >
        <div className="aspect-square bg-white overflow-hidden">
          <Image
            src={product.images[0] || "/images/placeholder.png"}
            alt={product.name}
            width={300}
            height={300}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-slow"
          />
        </div>

        <ProductCardInfo
          name={product.name}
          brand={product.brandName}
          category={product.categoryName}
          season={product.season && product.season}
          prices={prices}
        />
      </Link>

      <ProductActions
        productId={product.id}
        hasVariants={product.hasVariants}
      />
    </article>
  );
}

export default ProductCard;
