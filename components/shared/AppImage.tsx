"use client";

import ASSETS from "@/config/assets";
import Image from "next/image";
import { useState } from "react";

type AppImageProps = {
  productImage: string | undefined;
  altText: string;
  width?: number;
  height?: number;
  className?: string;
};

function AppImage({
  productImage,
  altText,
  width,
  height,
  className,
}: AppImageProps) {
  const [imageSrc, setImageSrc] = useState(
    productImage || ASSETS.fallbackImage,
  );

  return (
    <Image
      src={imageSrc}
      alt={altText}
      onError={() => {
        if (imageSrc !== ASSETS.fallbackImage) {
          setImageSrc(ASSETS.fallbackImage);
        }
      }}
      width={width || 300}
      height={height || 300}
      className={`h-full w-full object-cover transition-all duration-slow ${className}`}
    />
  );
}

export default AppImage;
