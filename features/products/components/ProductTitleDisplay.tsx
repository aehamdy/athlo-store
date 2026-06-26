import Heading from "@/components/shared/Heading";
import { ProductViewVariant } from "../types";

type ProductTitleDisplayProps = {
  title: string;
  variant?: ProductViewVariant;
};

function ProductTitleDisplay({ variant, title }: ProductTitleDisplayProps) {
  return (
    <Heading
      as="h3"
      className={`line-clamp-1 ${variant === "details" ? "font-bold text-xl text-foreground" : variant === "quickView" ? "font-medium text-sm text-foreground" : "font-medium text-sm text-muted-foreground"}`}
    >
      {title}
    </Heading>
  );
}

export default ProductTitleDisplay;
