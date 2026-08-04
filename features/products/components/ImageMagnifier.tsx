"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type ImageMagnifierProps = {
  src: string;
  alt: string;
  zoom?: number;
};

export default function ImageMagnifier({
  src,
  alt,
  zoom = 2,
}: ImageMagnifierProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({
    x: 50,
    y: 50,
  });

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-xl cursor-zoom-in"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        draggable={false}
        className="block w-full h-full object-cover select-none transition-transform duration-75 ease-out"
        style={{
          transform: isHovering ? `scale(${zoom})` : "scale(1)",

          transformOrigin: `${position.x}% ${position.y}%`,
        }}
      />
    </div>
  );
}
