"use client";

import { Button } from "../../../components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import AppImage from "@/components/shared/AppImage";

type ProductImageGalleryProps = {
  images: string[];
  productName: string;
};

function ProductImageGallery({
  images,
  productName,
}: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className={`space-y-md bg-base`}>
      <div className="aspect-square bg-muted rounded-xl border overflow-hidden">
        <AppImage
          productImage={images[selectedImage]}
          altText={productName}
          width={500}
          height={500}
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
              <AppImage
                productImage={image}
                altText={""}
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
