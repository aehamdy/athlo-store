type LoadingIndicatorProps = {
  size: "xs" | "sm" | "md" | "lg";
};

function LoadingIndicator({ size }: LoadingIndicatorProps) {
  const indicatorSize =
    size === "xs"
      ? "w-2 h-2"
      : size === "sm"
        ? "w-3 h-3"
        : size === "md"
          ? "w-4 h-4"
          : size === "lg" && "w-6 h-6";

  return (
    <div
      className={`${indicatorSize} border border-gray-500 border-s-transparent rounded-full animate-spin`}
    />
  );
}

export default LoadingIndicator;
