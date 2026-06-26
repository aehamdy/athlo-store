import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { ProductVariantT } from "../types";
import { Dispatch, SetStateAction } from "react";

type ProductQuantitySelectorProps = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  selectedVariant: ProductVariantT | null;
};

function ProductQuantitySelector({
  quantity,
  setQuantity,
  selectedVariant,
}: ProductQuantitySelectorProps) {
  const handleDecrement = () =>
    setQuantity((prev: number) => Math.max(1, prev - 1));

  const handleIncrement = () => setQuantity((prev) => prev + 1);

  return (
    <div className="space-y-sm">
      <div className="font-medium text-sm text-foreground">Quantity:</div>

      <div className="flex items-center gap-sm">
        <Button
          variant="plain"
          className="text-muted-foreground hover:text-primary-dark disabled:text-gray-500 disabled:bg-base hover:bg-accent-base border hover:border-transparent focus-visible:bg-accent-base focus-visible:border-transparent"
          disabled={quantity <= 1 || !selectedVariant}
          onClick={handleDecrement}
        >
          <Icon name="Minus" className="text-current" />
        </Button>

        <div
          className={`${selectedVariant ? "text-foreground" : "text-muted-foreground bg-base border-transparent"} py-1 px-3 border border-subtle rounded-md`}
        >
          {quantity}
        </div>

        <Button
          variant="plain"
          className="text-muted-foreground hover:text-primary-dark disabled:text-gray-500 disabled:bg-base hover:bg-accent-base border hover:border-transparent focus-visible:bg-accent-base focus-visible:border-transparent"
          disabled={
            quantity == selectedVariant?.stockQuantity || !selectedVariant
          }
          onClick={handleIncrement}
        >
          <Icon name="Plus" className="text-current" />
        </Button>
      </div>
    </div>
  );
}

export default ProductQuantitySelector;
