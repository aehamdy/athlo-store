import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

type ProductQuantitySelectorProps = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  maxQuantity: number;
  disabled?: boolean;
};

function ProductQuantitySelector({
  quantity,
  setQuantity,
  maxQuantity,
  disabled = false,
}: ProductQuantitySelectorProps) {
  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => Math.min(maxQuantity, prev + 1));
  };

  return (
    <div className="space-y-sm">
      <p className="font-medium text-sm text-foreground">Quantity</p>

      <div className="flex items-center gap-sm">
        <Button
          variant="plain"
          onClick={handleDecrease}
          disabled={disabled || quantity <= 1}
          className="text-muted-foreground hover:text-primary-dark disabled:text-gray-500 disabled:bg-base hover:bg-accent-base border hover:border-transparent focus-visible:bg-accent-base focus-visible:border-transparent disabled:cursor-not-allowed disabled:pointer-events-auto"
        >
          <Icon name="Minus" className="text-current" />
        </Button>

        <div
          className={`min-w-12 text-center py-1 px-3 rounded-md border ${
            disabled
              ? "bg-base border-transparent text-muted-foreground"
              : "border-subtle text-foreground"
          }`}
        >
          {quantity}
        </div>

        <Button
          variant="plain"
          onClick={handleIncrease}
          disabled={disabled || quantity >= maxQuantity}
          className="text-muted-foreground hover:text-primary-dark disabled:text-gray-500 disabled:bg-base hover:bg-accent-base border hover:border-transparent focus-visible:bg-accent-base focus-visible:border-transparent disabled:cursor-not-allowed disabled:pointer-events-auto"
        >
          <Icon name="Plus" className="text-current" />
        </Button>
      </div>
    </div>
  );
}

export default ProductQuantitySelector;
