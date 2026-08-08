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
      className={`line-clamp-1 ${variant === "details" ? "font-bold text-xl text-foreground" : variant === "quickView" ? "font-medium text-sm text-foreground" : variant === "cart-item" ? "w-55 md:w-70 lg:w-60 font-medium text-sm text-foreground truncate" : "font-medium text-sm text-muted-foreground"}`}
    >
      {formattedTitle}
    </Heading>
  );
}

export default ProductTitleDisplay;
