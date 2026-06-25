import Heading from "@/components/shared/Heading";
import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ProductCartItem } from "../types";
import useDeleteCartItem from "../hooks/useDeleteCartItem";
import useUpdateCartItemQuantity from "../hooks/useUpdateCartItemQuantity";

type CartItemCardProps = {
  product: ProductCartItem;
};

function CartItemCard({ product }: CartItemCardProps) {
  const { mutate: deleteItem, isPending } = useDeleteCartItem();
  const { mutate: updateQuantity, isPending: isQuantityPending } =
    useUpdateCartItemQuantity();

  const handleDecreaseQuantity = () => {
    updateQuantity({
      id: product.id,
      quantity: product.quantity - 1,
    });
  };

  const handleIncreaseQuantity = () => {
    updateQuantity({
      id: product.id,
      quantity: product.quantity + 1,
    });
  };

  return (
    <article className="p-3 text-foreground bg-surface border hover:border-accent-ring rounded-md duration-normal">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-sm">
          <div className="rounded-sm overflow-hidden">
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
              <Heading as="h5" className="font-medium text-sm text-foreground">
                {product.productName}
              </Heading>

              <div className="flex items-center gap-xs text-xs text-muted-foreground">
                {product.attributeKey && (
                  <p>
                    {product.attributeKey}: {product.attributeValue}
                  </p>
                )}

                {product.unit && (
                  <p>
                    {product.unit}: {product.attributeValue}
                  </p>
                )}

                {product.attributeKey && product.colorLabel && <span>|</span>}

                {product.colorLabel && (
                  <p>
                    Color:{" "}
                    {product.colorLabel.charAt(0).toUpperCase() +
                      product.colorLabel.slice(1).toLowerCase()}
                  </p>
                )}
              </div>

              <Heading as="h6" className="font-medium text-sm">
                {product.finalPrice < product.originalPrice ? (
                  <div className="flex items-center gap-xs">
                    <span className="text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                    <span className="text-red-500">
                      {product.finalPrice} EGP
                    </span>
                  </div>
                ) : (
                  <div className="text-accent-base">
                    {product.originalPrice} EGP
                  </div>
                )}
              </Heading>
            </div>

            <div className="flex items-center gap-sm">
              <Button
                variant="plain"
                className="text-muted-foreground hover:text-primary-dark disabled:text-gray-500 disabled:bg-base hover:bg-accent-base border hover:border-transparent focus-visible:bg-accent-base focus-visible:border-transparent rounded-md"
                disabled={product.quantity <= 1 || isQuantityPending}
                onClick={handleDecreaseQuantity}
              >
                <Icon name="Minus" className="text-current" />
              </Button>

              <span>{product.quantity}</span>

              <Button
                variant="plain"
                className="text-muted-foreground hover:text-primary-dark disabled:text-gray-500 disabled:bg-base hover:bg-accent-base border hover:border-transparent focus-visible:bg-accent-base focus-visible:border-transparent"
                disabled={isQuantityPending}
                onClick={handleIncreaseQuantity}
              >
                <Icon name="Plus" className="text-current" />
              </Button>
            </div>
          </div>
        </div>

        <div>
          <Button
            variant="plain"
            className="text-muted-foreground hover:text-red-500"
            disabled={isPending}
            onClick={() => deleteItem(product.id)}
          >
            <Icon name="Trash2" className="text-current hover:text-current" />
          </Button>
        </div>
      </div>
    </article>
  );
}

export default CartItemCard;
