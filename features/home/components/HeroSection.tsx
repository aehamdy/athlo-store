"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Icon from "@/components/shared/Icon";

const HERO_SLIDES = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920",
    link: "/products",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920",
    link: "/products?category=shoes",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920",
    link: "/products",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const t = useTranslations("home.hero");
  const textSlides = t.raw("slides");

  const slides = useMemo(
    () =>
      HERO_SLIDES.map((slide, i) => ({
        ...slide,
        ...textSlides[i],
      })),
    [textSlides],
  );

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative h-[75dvh] md:h-[80dvh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => {
        const active = i === current;

        return (
          <div
            key={slide.id}
            aria-hidden={!active}
            inert={!active ? true : undefined}
            className={cn(
              "absolute inset-0 transition-all duration-700 ease-in-out",
              active
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-105 pointer-events-none",
            )}
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative h-full container mx-auto px-4 flex items-center">
              <div className="w-full">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {slide.title}
                </h1>

                <p className="text-lg md:text-xl text-white/80 mb-8">
                  {slide.description}
                </p>

                <Link
                  href={slide.link}
                  className="inline-flex px-6 py-3 font-medium text-black bg-white hover:bg-accent-base hover:scale-105 focus-visible:bg-accent-base focus-visible:outline-none rounded-md transition-all duration-fast"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      {/* Controls */}
      <Button
        onClick={prev}
        aria-label={"Previous Slide"}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/30 focus-visible:bg-accent-base z-10"
      >
        <Icon name="ChevronLeft" className="h-6 w-6 text-current" />
      </Button>

      <Button
        onClick={next}
        aria-label={"Next Slide"}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/30 focus-visible:bg-accent-base z-10"
      >
        <Icon name="ChevronRight" className="h-6 w-6 text-current" />
      </Button>

      {/* Bullet Points */}
      <div className="absolute bottom-6 start-1/2 -translate-x-1/2 flex items-center gap-2 py-1 px-2 bg-white/10 rounded-md z-10">
        {slides.map((_, i) => (
          <Button
            key={i}
            variant="plain"
            size="custom"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={cn(
              "w-2.5 h-2.5 focus-visible:bg-white transition-all duration-normal",
              i === current
                ? "w-6 bg-accent-base rounded-sm"
                : "bg-white/50 hover:bg-white/80 rounded-full",
            )}
          />
        ))}
      </div>
    </section>
  );
}
