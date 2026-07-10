import Heading from "@/components/shared/Heading";
import { ProductViewVariant } from "../types";
import formatTitle from "@/lib/utils/formatTitle";

type ProductTitleDisplayProps = {
  title: string;
  variant?: ProductViewVariant;
};

function ProductTitleDisplay({ variant, title }: ProductTitleDisplayProps) {
  const formattedTitle = formatTitle(title);

  return (
    <Heading
      as={variant === "cart-item" ? "h5" : "h3"}
      className={`line-clamp-1 ${variant === "details" ? "font-bold text-xl text-foreground" : variant === "quickView" ? "font-medium text-sm text-foreground" : variant === "cart-item" ? "font-medium text-sm text-foreground" : "font-medium text-sm text-muted-foreground"}`}
    >
      {formattedTitle}
    </Heading>
  );
}

export default ProductTitleDisplay;
