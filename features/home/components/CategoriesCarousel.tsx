import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CategoryT } from "../types";
import CategoryCard from "./CategoryCard";
import { Card, CardContent } from "@/components/ui/card";

type CategoriesCarouselProps = {
  categories: CategoryT[];
};

function CategoriesCarousel({ categories }: CategoriesCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="relative w-[95%] lg:w-[92%] sm:max-w-xs md:max-w-full mx-auto "
    >
      <CarouselContent>
        {categories.map((category) => (
          <CarouselItem
            key={category.id}
            className="basis-[30%] md:basis-[23%] lg:basis-[18%]"
          >
            <Card className="p-0 h-full mx-tiny lg:mx-xs">
              <CardContent className="flex items-center justify-center aspect-auto h-full">
                <CategoryCard category={category} />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="text-muted-foreground" />
      <CarouselNext className="text-muted-foreground" />
    </Carousel>
  );
}

export default CategoriesCarousel;
