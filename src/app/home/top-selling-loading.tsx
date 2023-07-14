export default function TopSellingLoading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="space-y-6 m-10">
      <div className="space-y-5">
        <Skeleton className="w-2/3 h-10" />
        <Skeleton className="w-full h-20" />
      </div>
      <div className="space-y-5">
        <Skeleton className="w-2/3 h-10" />
        <Skeleton className="w-full h-20" />
      </div>
    </div>
  );
}

function Skeleton({ className }: { className: string }) {
  return (
    <div
      className={`bg-gray-200 motion-safe:animate-pulse rounded ${className}`}
    />
  );
}
