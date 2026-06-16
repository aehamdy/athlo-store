import LoadingIndicator from "@/components/shared/LoadingIndicator";

function LoadingMoreProducts() {
  return (
    <div className="flex flex-col items-center justify-center py-sm">
      <LoadingIndicator size="lg" accent />

      <p className="mt-sm text-sm text-foreground">Loading more products...</p>
    </div>
  );
}

export default LoadingMoreProducts;
