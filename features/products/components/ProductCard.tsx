import Image from "next/image";
import { ProductType } from "../types";
import Heading from "@/components/shared/Heading";
import ProductCardBadge from "./ProductBadge";
import Currency from "./Currency";
import AddToCartButton from "./AddToCartButton";
import QuickViewButton from "./QuickViewButton";

type ProductCardProps = {
  product: ProductType;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group p-0.5 bg-surface h-100 overflow-hidden rounded-2xl hover:shadow-lg transition-shadow duration-normal">
      <div className="relative w-full h-full rounded-4xl overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && <ProductCardBadge variant="new" />}

          {product.isFeatured && <ProductCardBadge variant="featured" />}
        </div>

        <div className="absolute bottom-0 start-0 end-0 pb-sm px-sm space-y-tiny bg-linear-to-t from-black/50 to-transparent backdrop-blur-[2px] transition-transform duration-normal">
          <Heading as="h3" className="font-semibold text-2xl text-white">
            {product.name}
          </Heading>

          <Currency price={product.price} />

          <div className="grid grid-cols-2 gap-xs">
            <AddToCartButton />

            <QuickViewButton />
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
