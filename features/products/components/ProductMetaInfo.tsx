type ProductMetaInfoProps = {
  brand?: string;
  season?: string;
  category?: string;
};

function ProductMetaInfo({ brand, season, category }: ProductMetaInfoProps) {
  return (
    <div className="flex justify-between items-center text-xs text-muted-foreground">
      <div className="flex items-center gap-xs">
        {brand && <p>{brand}</p>}

        {brand && season && (
          <span className="w-1 h-1 bg-accent-base rounded-full" />
        )}

        {season && <p>{season}</p>}
      </div>

      {category && <p>{category}</p>}
    </div>
  );
}

export default ProductMetaInfo;
