import { Skeleton } from "@/components/ui/skeleton";

function ReviewItemSkeleton() {
  return (
    <div className="p-3 bg-surface border border-gray-100 rounded-md">
      <div className="flex justify-between items-start gap-sm text-foreground">
        <div className="flex items-start gap-sm">
          <Skeleton className="w-10 h-10 rounded-full" />

          <div className="space-y-md">
            <div className="flex flex-col gap-tiny">
              <Skeleton className="w-32 h-4" />

              <div className="flex items-center gap-tiny">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Skeleton key={idx} className="w-4 h-4 rounded-full" />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-xs">
              <Skeleton className="w-120 h-4" />
              <Skeleton className="w-100 h-4" />
            </div>
          </div>
        </div>

        <Skeleton className="w-16 h-3" />
      </div>
    </div>
  );
}

export default ReviewItemSkeleton;
