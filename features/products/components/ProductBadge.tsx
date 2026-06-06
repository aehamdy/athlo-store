import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type ProductCardBadgeProps = {
  variant: "new" | "featured";
};

function ProductCardBadge({ variant }: ProductCardBadgeProps) {
  const t = useTranslations("productCard.badges");
  const baseStyles =
    "px-2 py-1 font-semibold text-xs rounded-md inline-flex items-center";

  const variantStyle = {
    new: "text-primary-dark bg-accent-base",
    featured: "text-secondary-foreground bg-secondary",
  };

  return (
    <span className={cn(baseStyles, variantStyle[variant])}>{t(variant)}</span>
  );
}

export default ProductCardBadge;
