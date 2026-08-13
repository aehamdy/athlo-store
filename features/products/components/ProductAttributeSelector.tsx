import { Button } from "@/components/ui/button";
import { ProductDetails } from "../types";

type ProductAttributeSelectorProps = {
  locale: string;
  attributeKey?: string;
  unit?: string;
  product: ProductDetails;
  selectedAttribute: string;
  setSelectedAttribute: (value: string) => void;
  setSelectedColor: (value: string) => void;
};

function ProductAttributeSelector({
  locale,
  attributeKey,
  unit,
  product,
  selectedAttribute,
  setSelectedAttribute,
  setSelectedColor,
}: ProductAttributeSelectorProps) {
  const attributes = [
    ...new Set(
      product.variants
        .map((variant) =>
          locale === "ar" ? variant.attributeValueAr : variant.attributeValueEn,
        )
        .filter(Boolean),
    ),
  ];

  const handleSelectAttribute = (value: string) => {
    setSelectedAttribute(value);
    setSelectedColor("");
  };

  return (
    <div className="space-y-3">
      {attributeKey && (
        <p className="flex items-center gap-xs font-medium text-sm text-foreground">
          {attributeKey} :
          {selectedAttribute && (
            <span className="text-muted-foreground">
              {selectedAttribute} {unit && unit}
            </span>
          )}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        {attributes.map((attribute) => {
          const selected = attribute === selectedAttribute;

          return (
            <Button
              key={attribute}
              variant={selected ? "default" : "outline"}
              onClick={() => handleSelectAttribute(attribute)}
              className={`${selected ? "text-primary-dark" : "text-foreground"} border hover:border-accent-ring`}
            >
              {attribute}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default ProductAttributeSelector;
