import { Skeleton } from "@/components/ui/skeleton";

function OrderSummarySkeleton() {
  return (
    <div className="rounded-xl border bg-card p-6 space-y-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Skeleton className="h-7 w-36" />
        <Skeleton className="h-5 w-16" />
      </div>

      {/* Cart items */}
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex gap-3 items-center">
            <Skeleton className="h-16 w-16 rounded-md" />

            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>

            <Skeleton className="h-5 w-14" />
          </div>
        ))}
      </div>

      <Skeleton className="h-px w-full" />

      {/* Price rows */}
      <div className="space-y-3">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>

        <div className="flex justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>

        <div className="flex justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>

      <Skeleton className="h-px w-full" />

      {/* Total */}
      <div className="flex justify-between">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-28" />
      </div>

      {/* Button */}
      <Skeleton className="h-11 w-full rounded-md" />

      {/* Terms */}
      <Skeleton className="h-4 w-3/4 mx-auto" />
    </div>
  );
}

export default OrderSummarySkeleton;
