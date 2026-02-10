"use client";

import { useState } from "react";
import Icon from "../shared/Icon";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

function ProductQuantity() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <Label className="block font-medium text-sm mb-sm">Quantity</Label>

      <div className="flex items-center gap-sm">
        <Button
          variant="outline"
          size="icon"
          disabled={quantity <= 1}
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className={`${quantity <= 1 ? "cursor-not-allowed" : ""}`}
        >
          <Icon name="Minus" className="w-4 h-4" />
        </Button>

        <span className="flex justify-center items-center w-12 h-7 font-medium text-center bg-subtle rounded-md">
          {quantity}
        </span>

        <Button
          variant="outline"
          size="icon"
          onClick={() => setQuantity((q) => q + 1)}
        >
          <Icon name="Plus" className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default ProductQuantity;
