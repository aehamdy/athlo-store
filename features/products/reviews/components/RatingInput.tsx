import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type RatingInputProps = {
  value: number;
  onChange: (rating: number) => void;
  max?: number;
};

function RatingInput({ value, onChange, max = 5 }: RatingInputProps) {
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div
      className="flex items-center gap-xs"
      onMouseLeave={() => setHoveredRating(0)}
    >
      {Array.from({ length: max }).map((_, index) => {
        const rating = index + 1;
        const activeRating = hoveredRating || value;

        return (
          <Button
            key={rating}
            type="button"
            variant="plain"
            aria-label={`Rate ${rating} star${rating > 1 ? "s" : ""}`}
            className={`group py-2 ${rating <= hoveredRating ? "hover:scale-110" : ""} transition-colors`}
            onMouseEnter={() => setHoveredRating(rating)}
            onClick={() => onChange(rating)}
          >
            <Icon
              name="Star"
              size={20}
              className={
                rating <= activeRating
                  ? `fill-accent-base text-accent-base ${rating <= hoveredRating && "scale-150"} duration-normal`
                  : "text-accent-base scale-120"
              }
            />
          </Button>
        );
      })}
    </div>
  );
}

export default RatingInput;
