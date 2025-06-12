import { Skeleton } from "../../ui/skeleton";

export function CardSkeleton() {
  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="col-span-1 px-10 pt-5" key={index}>
            <div className="w-full">
              <Skeleton className="h-40 mb-4" />
              <Skeleton className="h-6 mb-2 w-3/4" />
              <Skeleton className="h-4 mb-2 w-full" />
              <Skeleton className="h-4 mb-4 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}