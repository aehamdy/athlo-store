import Link from "next/link";
import { CategoryT } from "../types";
import ROUTES from "@/lib/routes";
import AppImage from "@/components/shared/AppImage";
import Heading from "@/components/shared/Heading";

type CategoryCardProps = {
  category: CategoryT;
};

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="h-full rounded-md overflow-hidden">
      <Link
        key={category.id}
        href={`${ROUTES.public.products}?category=${encodeURIComponent(category.name)}`}
        className="group relative aspect-square rounded-xl overflow-hidden"
      >
        <AppImage
          productImage={category.imageUrl}
          altText={category.name}
          className="group-hover:scale-105 "
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Heading
            as="h3"
            className="text-white text-sm md:text-lg font-semibold"
          >
            {category.name}
          </Heading>
        </div>

        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    </article>
  );
}

export default CategoryCard;
