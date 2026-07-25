"use client";

import ASSETS from "@/config/assets";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type AppImageProps = {
  productImage?: string;
  altText: string;
  width?: number;
  height?: number;
  className?: string;
};

function AppImage({
  productImage,
  altText,
  width = 300,
  height = 300,
  className,
}: AppImageProps) {
  const [hasError, setHasError] = useState(false);

  const imageSrc = hasError
    ? ASSETS.fallbackImage
    : productImage || ASSETS.fallbackImage;

  return (
    <Image
      key={productImage}
      src={imageSrc}
      alt={altText}
      width={width}
      height={height}
      className={cn(
        "h-full w-full object-cover transition-all duration-slow",
        className,
      )}
      onError={() => setHasError(true)}
    />
  );
}

export default AppImage;
