type ProductMetaInfoProps = {
  variant: "card" | "details";
  brand?: string;
  season?: string;
  category?: string;
};

function ProductMetaInfo({
  variant,
  brand,
  season,
  category,
}: ProductMetaInfoProps) {
  return (
    <div
      className={`flex ${variant === "details" ? "flex-col items-start gap-xs text-sm text-muted-foreground" : "flex-row-reverse justify-between items-center text-xs text-muted-foreground"}`}
    >
      {category && <p>{category}</p>}

      <div className="flex items-center gap-xs">
        {brand && <p>{brand}</p>}

        {brand && season && (
          <span className="w-1.5 h-1.5 bg-accent-base rounded-full" />
        )}

        {season && <p>{season}</p>}
      </div>
    </div>
  );
}

export default ProductMetaInfo;
