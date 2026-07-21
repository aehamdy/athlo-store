import { Skeleton } from "@/components/ui/skeleton";

function PaymentMethodsSkeleton() {
  return (
    <div className="rounded-xl border bg-card p-6 space-y-6">
      <div className="flex items-center gap-3">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-6 w-44" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Skeleton className="h-28 rounded-lg" />
        <Skeleton className="h-28 rounded-lg" />
      </div>
    </div>
  );
}

export default PaymentMethodsSkeleton;
