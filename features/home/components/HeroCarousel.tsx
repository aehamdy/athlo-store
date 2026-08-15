"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/shared/Heading";
import ROUTES from "@/lib/routes";
import Icon from "@/components/shared/Icon";
import { useLocale, useTranslations } from "next-intl";
import heroSlides from "../data/heroSlides";
import HeroCarouselProgress from "./HeroCarouselProgress";

function HeroCarousel() {
  const t = useTranslations("home.hero");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const slides = t.raw("slides");

  const [currentSlide, setCurrentSlide] = useState(0);

  const slideDuration = 6000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const slide = {
    ...heroSlides[currentSlide],
    ...slides[currentSlide],
  };

  const words = slide.title.split(" ");
  const head = words.slice(0, Math.ceil(words.length / 2)).join(" ");
  const tail = words.slice(Math.ceil(words.length / 2)).join(" ");

  return (
    <section className="relative h-[calc(100dvh-44px)] overflow-hidden">
      {/* Background */}

      <Image
        src={slide.image}
        alt={slide.title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          isRTL
            ? "bg-linear-to-l from-hero-overlay via-hero-overlay/80 to-hero-overlay/10"
            : "bg-linear-to-r from-hero-overlay via-hero-overlay/80 to-hero-overlay/10"
        }`}
      />

      {/* Content */}
      <div
        key={currentSlide}
        className="relative flex items-center h-full ms-lg z-10"
      >
        <div className="container">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-sm py-xs px-xl font-semibold text-[10px] lg:text-xs text-accent-base uppercase bg-accent-soft/10 border border-accent-base rounded-2xl animate-hero-badge">
              <Icon name="Zap" className="text-current" />

              <span>{slide.badge}</span>
            </div>

            {/* Heading */}
            <Heading
              as="h1"
              className="mt-xl font-display font-bold text-5xl lg:text-[90px] text-foreground uppercase leading-[3rem] lg:leading-[6rem]"
            >
              <span className="block animate-hero-title">{head}</span>

              {tail && (
                <span className="block text-stroke-accent-base animate-hero-title [animation-delay:220ms]">
                  {tail}
                </span>
              )}
            </Heading>

            {/* Description */}
            <p className="w-3/4 lg:w-full my-2xl ps-lg text-sm lg:text-lg text-muted-foreground border-s-3 border-accent-base animate-hero-description">
              {slide.description}
            </p>

            {/* Actions */}
            <div className="flex flex-col md:flex-row gap-md w-fit font-semibold animate-hero-actions">
              <Link
                href={slide.link}
                className="flex justify-center items-center gap-sm py-xs md:py-md px-sm md:px-lg text-primary-dark bg-accent-soft hover:bg-accent-base shadow-2xl shadow-accent-base rounded-md transition-all duration-300 hover:-translate-y-0.5"
              >
                {slide.cta}

                <Icon
                  name="ArrowRight"
                  className={`text-current transition-transform duration-300 ${
                    isRTL ? "rotate-180" : ""
                  }`}
                />
              </Link>

              <Link
                href={ROUTES.public.categories}
                className="flex justify-center items-center py-xs md:py-md px-sm md:px-lg text-foreground hover:text-primary-dark bg-accent-light hover:bg-white border border-subtle rounded-md transition-all duration-300 hover:-translate-y-0.5"
              >
                {t("browseCategories")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Progress */}

      <div className="absolute inset-x-0 bottom-4 lg:bottom-8 z-10 px-lg">
        <HeroCarouselProgress
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          slideDuration={slideDuration}
        />
      </div>
    </section>
  );
}

export default HeroCarousel;
