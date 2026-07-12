import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Icon from "../../../components/shared/Icon";
import Link from "next/link";
import ROUTES from "@/lib/routes";
import { useState } from "react";
import useFetchCartItems from "@/features/cart/hooks/useFetchCartItems";
import CartSummary from "@/features/cart/components/CartSummary";
import cartQueryKeys from "@/features/cart/constants/cartQueryKeys";
import { useQueryClient } from "@tanstack/react-query";
import prefetchCartItems from "@/features/cart/api/prefetchCartItems";
import CartList from "./CartList";

function CartDrawer() {
  const [open, setOpen] = useState(false);

  const { data: cartItems = [], isLoading, isError } = useFetchCartItems(open);

  const queryClient = useQueryClient();

  const handleMouseEnter = () => {
    const cached = queryClient.getQueryData(cartQueryKeys.all);

    if (!cached) {
      prefetchCartItems(queryClient);
    }
  };

  const isCartEmpty = cartItems.length === 0;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="relative">
        <Button
          variant="plain"
          aria-label="Open cart"
          aria-describedby="cart-button-desc"
          aria-haspopup="true"
          aria-controls="cart"
          className="group action-button focus-visible:text-primary-dark"
          onMouseEnter={handleMouseEnter}
        >
          <Icon
            name="ShoppingBag"
            className="group-hover:text-primary-dark group-focus-visible:text-primary-dark"
          />

          {cartItems.length > 0 && (
            <span className="flex justify-center items-center absolute top-0 end-0 w-4 h-4 text-sm bg-accent-soft rounded-full">
              {cartItems.length}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-9/10 sm:max-w-100 bg-base z-60">
        <SheetHeader className="border-b border-subtle">
          <SheetTitle className="flex items-center gap-xs">
            <Icon name="ShoppingBag" size={22} className="text-foreground" />
            <div className="flex items-center gap-xs">
              Your Cart <span className="text-sm">( {cartItems.length} )</span>
            </div>
          </SheetTitle>

          <SheetDescription className="sr-only">
            Review and manage the items in your shopping cart.
          </SheetDescription>
        </SheetHeader>

        <CartList
          cartItems={cartItems}
          isLoading={isLoading}
          isError={isError}
        />

        {cartItems.length >= 1 && (
          <SheetFooter className="border-t border-subtle">
            <CartSummary open={open} />

            <Link
              href={isCartEmpty ? "#" : ROUTES.public.checkout}
              aria-disabled={isCartEmpty}
              onClick={(e) => {
                if (isCartEmpty) {
                  e.preventDefault();
                  return;
                }

                setOpen(false);
              }}
              className={`main-button ${isCartEmpty && "pointer-events-none opacity-50 cursor-not-allowed"}`}
            >
              Checkout
            </Link>

            <SheetClose asChild>
              <Button
                variant="plain"
                className="font-normal text-foreground hover:text-primary-dark bg-transparent hover:bg-accent-base border border-subtle transition-colors duration-normal cursor-pointer"
              >
                Continue Shopping
              </Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default CartDrawer;
