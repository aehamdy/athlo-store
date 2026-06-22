import Heading from "@/components/shared/Heading";
import { ProductTitleVariant } from "../types";

type ProductTitleDisplayProps = {
  title: string;
  variant: ProductTitleVariant;
};

function ProductTitleDisplay({ variant, title }: ProductTitleDisplayProps) {
  return (
    <Heading
      as="h3"
      className={`line-clamp-1 ${variant === "details" ? "font-bold text-xl text-foreground" : "font-medium text-sm text-muted-foreground"}`}
    >
      {title}
    </Heading>
  );
}

export default ProductTitleDisplay;
