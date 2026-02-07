import Image from "next/image";
import { ProductType } from "../types";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
type ProductCardProps = {
  product: ProductType;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      //   href={`/product/${product.id}`}
      className="group block bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-2 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-md">
              New
            </span>
          )}
          {product.isFeatured && (
            <span className="px-2 py-1 text-xs font-semibold bg-secondary text-secondary-foreground rounded-md">
              Featured
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="secondary"
            size="icon"
            className={"h-9 w-9 rounded-full shadow-md"}
            // onClick={() => console.log("Wishlist toggle")}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Quick Add */}
        <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Button
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            // onClick={handleAddToCart}
          >
            <ShoppingBag className="h-4 w-4" />
            Add to cart
          </Button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1"></p>
        <h3 className="font-medium text-sm mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-lg font-bold text-primary">{product.price}</p>

        {/* Color Options Preview */}
        <div className="flex items-center gap-1 mt-3">
          {product.colors.slice(0, 4).map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border border-border"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-muted-foreground ml-1">
              +{product.colors.length - 4}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
