"use client";

import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ProductViewVariant } from "../types";

type ProductImageGalleryProps = {
  images: string[];
  productName: string;
  variant?: ProductViewVariant;
};

function ProductImageGallery({
  images,
  productName,
  variant,
}: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div
      className={`space-y-md ${variant === "details" ? "bg-surface" : variant === "quickView" ? "bg-base" : "bg-white"}`}
    >
      <div className="aspect-square bg-muted rounded-xl border overflow-hidden">
        <Image
          src={images[selectedImage]}
          alt={productName}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex gap-sm pb-xs overflow-x-auto">
        {images.length > 1 &&
          images.map((image, index) => (
            <Button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn(
                "shrink-0 w-20 h-20 p-0 border rounded-lg transition-colors overflow-hidden ",
                selectedImage === index
                  ? "border-accent-base"
                  : "border-subtle",
              )}
            >
              <Image
                src={image}
                alt=""
                className="w-full h-full object-cover"
                width={200}
                height={200}
              />
            </Button>
          ))}
      </div>
    </div>
  );
}

export default ProductImageGallery;
