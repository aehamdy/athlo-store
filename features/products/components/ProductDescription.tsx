import { cn } from "@/lib/utils";

type ProductDescriptionProps = {
  description: string;
  className?: string;
};

function ProductDescription({
  description,
  className,
}: ProductDescriptionProps) {
  // return <p className="text-muted-foreground">{description}</p>;
  return (
    <p className={cn(`text-muted-foreground ${className}`)}>{description}</p>
  );
}

export default ProductDescription;
