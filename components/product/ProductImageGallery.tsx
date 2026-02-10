"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Product } from "../products/ProductsGrid";

type ProductImageGalleryProps = {
  product: Product;
};

function ProductImageGallery({ product }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-md">
      <div className="aspect-square bg-muted rounded-xl overflow-hidden">
        <Image
          src={product.images[selectedImage]}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex gap-sm pb-xs overflow-x-auto">
        {product.images.map((image, index) => (
          <Button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "shrink-0 w-20 h-20 p-0 border rounded-lg transition-colors overflow-hidden ",
              selectedImage === index ? "border-accent-base" : "border-subtle",
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
