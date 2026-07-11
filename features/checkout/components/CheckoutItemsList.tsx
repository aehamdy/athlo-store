import Heading from "@/components/shared/Heading";
import CartItemCardSkeleton from "@/features/cart/components/CartItemCardSkeleton";
import useFetchCartItems from "@/features/cart/hooks/useFetchCartItems";
import { ProductCartItem } from "@/features/cart/types";
import Currency from "@/features/products/components/Currency";
import ProductTitleDisplay from "@/features/products/components/ProductTitleDisplay";
import Image from "next/image";

function CheckoutItemsList() {
  const { data: cartItems = [], isLoading, isError } = useFetchCartItems();

  if (isLoading) {
    return (
      <div className="space-y-sm">
        {Array.from({ length: 3 }).map((_, index) => (
          <CartItemCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-md text-center text-sm text-destructive">
        Failed to load cart items.
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="py-md text-center text-sm text-muted-foreground">
        Your cart is empty.
      </div>
    );
  }

  return (
    <ul className="space-y-sm max-h-65 overflow-y-auto">
      {cartItems.map((product: ProductCartItem) => (
        <article
          key={product.id}
          className="p-0.5 text-foreground bg-surface rounded-md duration-normal"
        >
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-sm">
              <div className="w-[64px] h-12.5 rounded-sm overflow-hidden">
                <Image
                  src={product.productImageUrl}
                  alt={product.productName}
                  width={90}
                  height={90}
                  className="w-full h-full"
                />
              </div>

              <div className="space-y-tiny">
                <div className="space-y-0.5">
                  <ProductTitleDisplay
                    variant="cart-item"
                    title={product.productName}
                  />

                  <div className="flex items-center gap-xs text-xs text-muted-foreground">
                    {product.attributeKey && (
                      <p className="flex items-center">
                        {product.attributeKey}: {product.attributeValue}{" "}
                        {product.unit && product.unit}
                      </p>
                    )}

                    {product.attributeKey && product.colorLabel && (
                      <span>|</span>
                    )}

                    {product.colorLabel && (
                      <p>
                        Color:{" "}
                        {product.colorLabel.charAt(0).toUpperCase() +
                          product.colorLabel.slice(1).toLowerCase()}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-sm">
                    <Heading as="h6" className="font-medium text-sm">
                      {product.finalPrice < product.originalPrice ? (
                        <div className="flex items-center gap-xs">
                          <span className="text-muted-foreground line-through">
                            <Currency price={product.originalPrice} />
                          </span>

                          <span className="text-red-500">
                            <Currency price={product.finalPrice} />
                          </span>
                        </div>
                      ) : (
                        <div className="text-accent-base">
                          <Currency price={product.originalPrice} />
                        </div>
                      )}
                    </Heading>

                    <span className="text-muted-foreground">
                      x {product.quantity}
                    </span>
                  </div>
                </div>

                {/*  */}
              </div>
            </div>
          </div>
        </article>
      ))}
    </ul>
  );
}

export default CheckoutItemsList;
