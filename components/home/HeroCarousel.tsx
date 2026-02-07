"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const heroSlides = [
  {
    id: 1,
    title: "New Season Collection",
    titleAr: "مجموعة الموسم الجديد",
    subtitle: "Elevate your performance with our latest gear",
    subtitleAr: "ارفع مستوى أدائك مع أحدث معداتنا",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920",
    cta: "Shop Now",
    ctaAr: "تسوق الآن",
    link: "/products",
  },
  {
    id: 2,
    title: "Run Further",
    titleAr: "اركض أبعد",
    subtitle: "Premium running shoes designed for champions",
    subtitleAr: "أحذية جري فاخرة مصممة للأبطال",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920",
    cta: "Explore Shoes",
    ctaAr: "استكشف الأحذية",
    link: "/products?category=shoes",
  },
  {
    id: 3,
    title: "Train Like Never Before",
    titleAr: "تدرب كما لم تفعل من قبل",
    subtitle: "High-performance apparel for every workout",
    subtitleAr: "ملابس عالية الأداء لكل تمرين",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920",
    cta: "View Collection",
    ctaAr: "شاهد المجموعة",
    link: "/products",
  },
];

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  //   const { language, isRTL } = useLanguage();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[calc(100dvh-60px)] overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-all duration-700 ease-in-out",
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105",
          )}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div
              className={cn(
                "max-w-xl",
                // isRTL ? "mr-auto text-right" : "ml-0 text-left",
              )}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                {/* {language === "ar" ? slide.titleAr : slide.title} */}
              </h1>
              <p
                className="text-lg md:text-xl text-white/80 mb-8 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                {/* {language === "ar" ? slide.subtitleAr : slide.subtitle} */}
              </p>
              {/* <NavLink href={slide.link}> */}
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                {/* {language === "ar" ? slide.ctaAr : slide.cta} */}
              </Button>
              {/* </NavLink> */}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        // onClick={isRTL ? nextSlide : prevSlide}
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        // onClick={isRTL ? prevSlide : nextSlide}
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Bullet Indicators */}
      <div className="absolute bottom-6 start-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {heroSlides.map((_, index) => (
          <Button
            key={index}
            variant="plain"
            size="custom"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "w-2.5 h-2.5 transition-all duration-normal",
              index === currentSlide
                ? "w-6 bg-accent-base rounded-8"
                : "bg-white/50 hover:bg-white/80 rounded-full",
            )}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;
