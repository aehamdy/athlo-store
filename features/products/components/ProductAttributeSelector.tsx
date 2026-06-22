import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import { ProductT } from "../types";

type ProductAttributeSelectorProps = {
  attributeKey: string | undefined;
  product: ProductT;
  selectedAttribute: string;
  setSelectedAttribute: (value: string) => void;
  setSelectedColor: (value: string) => void;
};

function ProductAttributeSelector({
  attributeKey,
  product,
  selectedAttribute,
  setSelectedAttribute,
  setSelectedColor,
}: ProductAttributeSelectorProps) {
  const attributes = useMemo(
    () =>
      Array.from(
        new Set(
          product.variants?.map((variant) => variant.attributeValueEn) ?? [],
        ),
      ),
    [product.variants],
  );

  const handleSelectSize = (attr: string) => {
    setSelectedAttribute(attr);
    setSelectedColor("");
  };

  return (
    <div className="flex flex-col gap-sm">
      {attributeKey && (
        <p className="font-medium text-sm text-foreground">{attributeKey}:</p>
      )}

      <div className="flex flex-wrap items-center gap-sm">
        {attributes.map((attr, idx) => (
          <Button
            key={idx}
            variant={selectedAttribute === attr ? "default" : "outline"}
            className={`${selectedAttribute === attr ? "text-dark" : "text-foreground"} hover:scale-110`}
            onClick={() => handleSelectSize(attr)}
          >
            {attr}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ProductAttributeSelector;
