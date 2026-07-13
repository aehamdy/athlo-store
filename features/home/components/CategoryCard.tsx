import Image from "next/image";
import Link from "next/link";
import { CategoryT } from "../types";

type CategoryCardProps = {
  category: CategoryT;
};

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="h-full rounded-md overflow-hidden">
      <Link
        key={category.id}
        href=""
        //   href={`/products?category=${category.id}`}
        className="group relative aspect-square rounded-xl overflow-hidden"
      >
        <Image
          src={category.imageUrl}
          // alt={language === "ar" ? category.nameAr : category.name}
          alt={category.name}
          width={600}
          height={600}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-lg md:text-xl font-semibold">
            {/* {language === "ar" ? category.nameAr : category.name} */}
            {category.name}
          </h3>
        </div>
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    </article>
  );
}

export default CategoryCard;
