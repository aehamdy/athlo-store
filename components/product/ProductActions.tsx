import Icon from "../shared/Icon";
import { Button } from "../ui/button";

function ProductActions() {
  return (
    <div className="flex gap-md pt-md">
      <Button
        size="lg"
        className="flex-1 gap-xs text-primary-dark bg-accent-base hover:bg-accent-base/90"
        // onClick={handleAddToCart}
      >
        <Icon name="ShoppingBag" className="w-5 h-5 text-primary-dark" />
        Add To Cart
      </Button>
    </div>
  );
}

export default ProductActions;
