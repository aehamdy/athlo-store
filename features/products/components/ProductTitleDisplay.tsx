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
      className={`my-xs line-clamp-1 ${variant === "details" ? "" : "font-normal text-sm text-muted-foreground"}`}
    >
      {title}
    </Heading>
  );
}

export default ProductTitleDisplay;
