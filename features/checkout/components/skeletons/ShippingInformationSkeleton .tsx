import { Skeleton } from "@/components/ui/skeleton";

function ShippingInformationSkeleton() {
  return (
    <div className="rounded-xl border bg-card p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-6 w-44" />
      </div>

      {/* Full name + Phone */}
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-14 w-full rounded-md" />
        <Skeleton className="h-14 w-full rounded-md" />
      </div>

      {/* Address */}
      <Skeleton className="h-14 w-full rounded-md" />

      {/* City + Region */}
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-14 w-full rounded-md" />
        <Skeleton className="h-14 w-full rounded-md" />
      </div>

      {/* Country + Building */}
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-14 w-full rounded-md" />
        <Skeleton className="h-14 w-full rounded-md" />
      </div>

      {/* Floor + Apartment */}
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-14 w-full rounded-md" />
        <Skeleton className="h-14 w-full rounded-md" />
      </div>

      {/* Notes */}
      <Skeleton className="h-28 w-full rounded-md" />

      {/* Shipping Methods title */}
      <div className="flex items-center gap-3 pt-2">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-6 w-40" />
      </div>

      {/* Shipping cards */}
      <div className="space-y-3">
        <Skeleton className="h-20 w-full rounded-lg" />
        <Skeleton className="h-20 w-full rounded-lg" />
        <Skeleton className="h-20 w-full rounded-lg" />
      </div>
    </div>
  );
}

export default ShippingInformationSkeleton;
