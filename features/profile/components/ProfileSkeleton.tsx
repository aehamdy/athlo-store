import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function ProfileSkeleton() {
  return (
    <section className="mx-auto space-y-xl px-sm py-5xl lg:w-[65%]">
      {/* User Card */}
      <Card className="p-xl">
        <div className="flex items-center gap-sm">
          <Skeleton className="h-16 w-16 rounded-full" />

          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-44" />
            <Skeleton className="h-4 w-64" />
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <Card className="p-sm">
        <div className="flex gap-2">
          <Skeleton className="flex-1 h-8 rounded-md" />
          <Skeleton className="flex-1 h-8 rounded-md" />
          <Skeleton className="flex-1 h-8 rounded-md" />
          <Skeleton className="flex-1 h-8 rounded-md" />
        </div>
      </Card>

      {/* Profile Form */}
      <Card className="space-y-lg p-xl">
        <div className="grid grid-cols-1 gap-lg md:grid-cols-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-11 w-full rounded-md" />
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Skeleton className="h-11 w-36 rounded-md" />
        </div>
      </Card>
    </section>
  );
}

export default ProfileSkeleton;
