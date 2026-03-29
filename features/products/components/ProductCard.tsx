import Image from "next/image";
import { ProductType } from "../types";
import { Button } from "@/components/ui/button";
import Heading from "@/components/shared/Heading";
import Icon from "@/components/shared/Icon";
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

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-2 py-1 font-semibold text-xs text-primary-dark bg-accent-base rounded-md">
              New
            </span>
          )}
          {product.isFeatured && (
            <span className="px-2 py-1 font-semibold text-xs bg-secondary text-secondary-foreground rounded-md">
              Featured
            </span>
          )}
        </div>

        <div className="absolute bottom-0 start-0 end-0 pb-sm px-sm space-y-tiny bg-linear-to-t from-black/50 to-transparent backdrop-blur-[2px] transition-transform duration-normal">
          <Heading as="h3" className="font-semibold text-2xl text-white">
            {product.name}
          </Heading>

          <p className="font-medium text-lg text-primary-light">
            EGP {product.price}
          </p>

          <div className="grid grid-cols-2 gap-xs">
            <Button
              variant="plain"
              size="custom"
              className="group/button py-xs px-sm items-center gap-sm text-primary-light hover:text-primary-dark bg-primary-dark hover:bg-accent-base active:bg-accent-base rounded-2xl transition-all duration-normal cursor-pointer"
            >
              <Icon
                name="ShoppingBag"
                className="text-primary-light group-hover/button:text-primary-dark transition-colors duration-normal"
              />
              Add to cart
            </Button>

            <Button
              variant="plain"
              size="custom"
              className="group/button py-xs px-sm items-center gap-sm text-primary-light hover:text-primary-dark hover:bg-primary-light active:bg-primary-light border border-primary-light rounded-2xl transition-all duration-normal cursor-pointer"
            >
              <Icon
                name="Heart"
                className="text-primary-light group-hover/button:text-primary-dark transition-colors duration-normal"
              />
              Quick View
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
