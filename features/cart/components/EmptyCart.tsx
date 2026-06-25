import Heading from "@/components/shared/Heading";
import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-2 text-center">
      <div className="flex items-center justify-center mb-4 rounded-full bg-accent-base/10">
        <Icon name="ShoppingBag" size={36} className="text-muted-foreground" />
      </div>

      <Heading as="h3" className="font-semibold text-lg text-muted-foreground">
        Your cart is empty
      </Heading>

      <SheetClose asChild>
        <Button className="mt-6 font-normal">Continue Shopping</Button>
      </SheetClose>
    </div>
  );
}

export default EmptyCart;
