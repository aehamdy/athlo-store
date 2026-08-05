import { Skeleton } from "@/components/ui/skeleton";

function CategoriesBentoGridSkeleton() {
  const gridMap = [
    "col-start-1 row-start-1 md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-1 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1",
    "col-start-2 row-start-1 md:col-start-1 md:row-start-3 lg:col-start-3 lg:row-start-1",
    "col-start-1 row-start-2 md:col-start-2 md:row-start-3 lg:col-start-3 lg:row-start-2",
    "col-start-2 row-start-2 md:col-start-1 md:row-start-4 lg:col-start-1 lg:row-start-3",
    "col-start-1 row-start-3 md:col-start-2 md:row-start-4 lg:col-start-2 lg:row-start-3",
  ];

  return (
    <div className="flex-1 grid grid-cols-2 grid-rows-3 md:grid-cols-2 md:grid-rows-5 lg:grid-cols-3 lg:grid-rows-3 gap-4 h-162.5 md:h-225 lg:h-137.5">
      {gridMap.map((classes, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-xl ${classes}`}
        >
          <Skeleton className="absolute inset-0 h-full w-full rounded-xl" />

          <div className="absolute bottom-0 left-0 right-0 p-lg space-y-2">
            <Skeleton className="h-6 w-2/3 bg-white/20" />
          </div>
        </div>
      ))}

      {/* View All Categories Card */}
      <div
        className="
          flex flex-col items-center justify-center gap-md
          col-start-2 row-start-3
          md:col-span-2 md:row-start-5
          lg:col-start-3 lg:row-start-3 lg:col-span-1
          rounded-xl border
          p-lg
        "
      >
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="size-12 rounded-full" />
      </div>
    </div>
  );
}

export default CategoriesBentoGridSkeleton;
