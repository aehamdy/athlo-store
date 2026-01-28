import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Icon from "./shared/Icon";
import Link from "next/link";
import endpoints from "@/lib/endpoints";

function CartButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="plain"
          aria-label="Open cart"
          aria-describedby="cart-button-desc"
          aria-haspopup="true"
          aria-controls="cart"
          className="group action-button focus-visible:text-primary-dark"
        >
          <Icon
            name="ShoppingBag"
            className="group-hover:text-primary-dark group-focus-visible:text-primary-dark"
          />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-9/10 sm:max-w-[400px] bg-base z-60"
      >
        <SheetHeader className="border-b border-subtle">
          <SheetTitle className="flex items-center gap-xs">
            <Icon name="ShoppingBag" size={22} className="text-foreground" />
            Your Cart <span className="text-sm">(0)</span>
          </SheetTitle>
        </SheetHeader>

        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            {/* <Label htmlFor="sheet-demo-name">Name</Label> */}
            {/* <Input id="sheet-demo-name" defaultValue="Pedro Duarte" /> */}
          </div>
          <div className="grid gap-3">
            {/* <Label htmlFor="sheet-demo-username">Username</Label> */}
            {/* <Input id="sheet-demo-username" defaultValue="@peduarte" /> */}
          </div>
        </div>

        <SheetFooter className="border-t border-subtle">
          <Link href={endpoints.checkout} className="main-button">
            Checkout
          </Link>

          <SheetClose asChild>
            <Button
              variant="plain"
              className="font-normal hover:text-primary-dark bg-transparent hover:bg-accent-soft border border-subtle transition-colors duration-normal cursor-pointer"
            >
              Continue Shopping
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default CartButton;
