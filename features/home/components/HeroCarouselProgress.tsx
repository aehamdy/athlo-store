import { Button } from "@/components/ui/button";
import heroSlides from "../data/heroSlides";
import Icon from "@/components/shared/Icon";
import { Dispatch, SetStateAction } from "react";
import { useLocale } from "next-intl";

type HeroCarouselProgressProps = {
  currentSlide: number;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
  slideDuration: number;
};

function HeroCarouselProgress({
  currentSlide,
  setCurrentSlide,
  slideDuration,
}: HeroCarouselProgressProps) {
  const locale = useLocale();
  const isRTL = locale === "ar";

  const handleSlideChange = (direction: "next" | "previous") => {
    setCurrentSlide((prev) => {
      if (direction === "next") {
        return prev === heroSlides.length - 1 ? 0 : prev + 1;
      }

      return prev === 0 ? heroSlides.length - 1 : prev - 1;
    });
  };

  return (
    <div className="progress-bars flex flex-col items-start gap-sm md:gap-lg">
      <div className="flex justify-between items-end w-full">
        <div className="flex items-center gap-md">
          <Button
            variant="plain"
            className="flex justify-center items-center py-xs sm:py-sm px-xs sm:px-lg text-foreground hover:text-primary-dark hover:bg-accent-soft border border-muted-foreground hover:border-accent-soft rounded-full cursor-pointer"
            onClick={() => handleSlideChange("previous")}
          >
            <Icon
              name="ArrowLeft"
              className={`${isRTL && "rotate-180"} text-current`}
            />
          </Button>

          <Button
            variant="plain"
            className="flex justify-center items-center py-xs sm:py-sm px-sm sm:px-lg text-foreground hover:text-primary-dark hover:bg-accent-soft border border-muted-foreground hover:border-accent-soft rounded-full cursor-pointer"
            onClick={() => handleSlideChange("next")}
          >
            <Icon
              name="ArrowRight"
              className={`${isRTL && "rotate-180"} text-current`}
            />
          </Button>
        </div>

        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="flex items-center gap-xs font-bold text-muted-foreground"
        >
          <span className="text-foreground">0{currentSlide + 1}</span>
          <span>/</span>
          <span>0{heroSlides.length}</span>
        </div>
      </div>

      <div className="flex h-1 w-full gap-sm">
        {heroSlides.map((_, index) => {
          const isCurrent = index === currentSlide;
          const isCompleted = index < currentSlide;

          return (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="relative h-full flex-1 overflow-hidden rounded-md bg-white/30"
            >
              {isCurrent ? (
                <span
                  key={`progress-${currentSlide}`}
                  className="absolute inset-y-0 start-0 bg-accent-base"
                  style={{
                    animation: `progress ${slideDuration}ms linear forwards`,
                  }}
                />
              ) : (
                <span
                  className="absolute inset-y-0 start-0 bg-accent-base"
                  style={{
                    width: isCompleted ? "100%" : "0%",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default HeroCarouselProgress;
