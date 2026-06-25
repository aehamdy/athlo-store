import { Skeleton } from "@/components/ui/skeleton";

function CartItemCardSkeleton() {
  return (
    <div className="flex items-start gap-sm h-31 p-3 bg-surface rounded-md">
      <Skeleton className="w-24 h-18 rounded-md animate-pulse" />

      <div className="space-y-1">
        <div className="flex flex-col gap-tiny">
          <Skeleton className="w-25 h-3.75 rounded-md animate-pulse" />
          <Skeleton className="w-30 h-2.5 rounded-md animate-pulse" />
          <Skeleton className="w-15 h-3.75 rounded-md animate-pulse" />
        </div>

        <div className="flex items-center gap-xs">
          <Skeleton className="w-10.5 h-7.5 rounded-md animate-pulse" />
          <Skeleton className="w-8 h-7.5 rounded-md animate-pulse" />
          <Skeleton className="w-10.5 h-7.5 rounded-md animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default CartItemCardSkeleton;
