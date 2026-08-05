import { Skeleton } from "@/components/ui/skeleton";

function ProductCardSkeleton() {
  return (
    <article className="relative overflow-hidden rounded-2xl border bg-surface">
      {/* Image */}
      <div className="aspect-square bg-white">
        <Skeleton className="size-full rounded-none" />
      </div>

      {/* Card Info */}
      <div className="p-md space-y-3 bg-surface">
        {/* Brand / Category */}
        <div className="flex justify-between items-center">
          <Skeleton className="h-2 w-20" />
          <Skeleton className="h-2 w-16" />
        </div>

        {/* Product Name */}
        <Skeleton className="h-3 w-3/4" />

        {/* Price */}
        <Skeleton className="h-3 w-16" />
      </div>
    </article>
  );
}

export default ProductCardSkeleton;
