import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { ProductDetails } from "../types";

type ProductColorSelectorProps = {
  product: ProductDetails;
  selectedAttribute: string;
  selectedColor: string;
  setSelectedColor: (value: string) => void;
};

function ProductColorSelector({
  product,
  selectedAttribute,
  selectedColor,
  setSelectedColor,
}: ProductColorSelectorProps) {
  const colors = [
    ...new Map(
      product.variants.map((variant) => [
        variant.colorLabel,
        {
          label: variant.colorLabel,
          hex: variant.colorHex,
        },
      ]),
    ).values(),
  ];

  return (
    <div className="space-y-3">
      {selectedColor && (
        <p className="flex items-center gap-xs font-medium text-sm">
          Color:
          <span className="text-muted-foreground">{selectedColor}</span>
        </p>
      )}

      <div className="flex flex-wrap gap-4">
        {colors.map((color) => {
          const matchingVariant = product.variants.find(
            (variant) =>
              variant.colorLabel === color.label &&
              (!selectedAttribute ||
                variant.attributeValueEn === selectedAttribute),
          );

          const availableForSelectedAttribute = !!matchingVariant;

          const outOfStock =
            availableForSelectedAttribute &&
            matchingVariant.stockQuantity === 0;

          const isDimmed = selectedAttribute && !availableForSelectedAttribute;

          const selected = selectedColor === color.label;

          const lightColor =
            color.hex.toLowerCase() === "#ffffff" ||
            color.hex.toLowerCase() === "#e0e0e0";

          return (
            <Button
              key={color.label}
              variant="plain"
              disabled={outOfStock}
              onClick={() => setSelectedColor(color.label)}
              className={` relative flex items-center justify-center w-12 h-12 rounded-full border-4 transition-all ${selected ? "border-accent-base scale-110" : "border-subtle"}     ${
                isDimmed
                  ? "opacity-40 cursor-not-allowed"
                  : outOfStock
                    ? "opacity-40 cursor-not-allowed scale-90"
                    : "opacity-100 hover:scale-105"
              }`}
              style={{ backgroundColor: color.hex }}
            >
              {selected && !outOfStock && !isDimmed && (
                <Icon
                  name="Check"
                  className={lightColor ? "text-black" : "text-white"}
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
