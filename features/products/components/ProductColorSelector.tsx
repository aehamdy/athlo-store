import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { ProductT } from "../types";

type ProductColorSelectorProps = {
  selectedColor: string;
  selectedAttribute: string;
  product: ProductT;
  setSelectedColor: (value: string) => void;
};
function ProductColorSelector({
  selectedColor,
  selectedAttribute,
  product,
  setSelectedColor,
}: ProductColorSelectorProps) {
  const allColors = [
    ...new Map(
      (product.variants ?? []).map((variant) => [
        variant.colorLabel,
        {
          colorCode: variant.colorHex,
          label: variant.colorLabel,
        },
      ]),
    ).values(),
  ];

  const fullVariants = product.variants?.filter(
    (variant) =>
      variant.attributeValueEn.toLowerCase() ===
      selectedAttribute.toLowerCase(),
  );

  const handleSelectColor = (colorLabel: string) => {
    setSelectedColor(colorLabel);
  };

  return (
    <div className="space-y-3">
      {selectedColor && (
        <p className="flex ietms-center gap-xs font-medium text-sm text-foreground">
          Color:{" "}
          <span className="text-muted-foreground">
            {selectedColor.charAt(0).toUpperCase() +
              selectedColor.slice(1).toLowerCase() || ""}
          </span>
        </p>
      )}

      <div className="flex items-center flex-wrap gap-4">
        {allColors?.map((swatch) => {
          const variantForSwatch = selectedAttribute
            ? fullVariants?.find((v) => v.colorLabel === swatch.label)
            : product.variants?.find((v) => v.colorLabel === swatch.label);

          const isOutOfStock = (variantForSwatch?.stockQuantity ?? 0) === 0;
          const isSelectedColor = selectedColor === swatch.label;

          return (
            <Button
              key={swatch.colorCode}
              variant="plain"
              className={`group relative flex justify-center items-center gap-2 w-12 h-12 border-4 ${isSelectedColor ? "border-accent-base scale-110" : "border-subtle"} ${isOutOfStock ? "opacity-45 cursor-not-allowed" : "hover:scale-105"} rounded-full transition-transform`}
              style={{ backgroundColor: swatch.colorCode }}
              disabled={isOutOfStock}
              onClick={() => handleSelectColor(swatch.label)}
            >
              {isSelectedColor && !isOutOfStock && (
                <Icon
                  name="Check"
                  className={`${swatch.colorCode === "#ffffff" || swatch.colorCode === "#E0E0E0" ? "text-black" : "text-white"}`}
                />
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default ProductColorSelector;
