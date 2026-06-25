import ErrorMessage from "@/components/shared/ErrorMessage";
import CartIetmCardSkeleton from "./CartIetmCardSkeleton";
import EmptyCart from "./EmptyCart";
import CartItemCard from "./CartItemCard";
import { ProductCartItem } from "../types";

type CartListProps = {
  cartItems: ProductCartItem[];
  isLoading: boolean;
  isError: boolean;
};

function CartList({ cartItems, isLoading, isError }: CartListProps) {
  return (
    <ul className="min-h-101.25 space-y-xs px-sm overflow-y-auto">
      {!isLoading && !isError && cartItems.length === 0 && <EmptyCart />}

      {isLoading && <CartIetmCardSkeleton />}

      {isError && <ErrorMessage message="Failed to load cart." />}

      {cartItems?.map((item: ProductCartItem) => (
        <CartItemCard key={item.id} product={item} />
      ))}
    </ul>
  );
}

export default CartList;
