import ReviewItemSkeleton from "./ReviewItemSkeleton";

function ReviewListSkeleton() {
  return (
    <ul className="p-tiny h-105.25 overflow-y-auto space-y-md">
      {Array.from({ length: 2 }).map((_, idx) => (
        <li key={idx}>
          <ReviewItemSkeleton />
        </li>
      ))}
    </ul>
  );
}

export default ReviewListSkeleton;
