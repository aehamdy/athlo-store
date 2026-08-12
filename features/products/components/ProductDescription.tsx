import { cn } from "@/lib/utils";

type ProductDescriptionProps = {
  description: string;
  className?: string;
};

function ProductDescription({
  description,
  className,
}: ProductDescriptionProps) {
  return (
    <p
      className={cn(
        `w-full md:w-4/5 pb-md text-muted-foreground leading-3xl ${className}`,
      )}
      // className={cn(
      //   `py-md px-sm text-muted-foreground bg-accent-light leading-3xl rounded-md ${className}`,
      // )}
    >
      {description}
    </p>
  );
}

export default ProductDescription;
