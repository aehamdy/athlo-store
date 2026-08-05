"use client";

import useFetchCategories from "../hooks/useFetchCategories";
import Link from "next/link";
import Heading from "@/components/shared/Heading";
import ROUTES from "@/lib/routes";
import Icon from "@/components/shared/Icon";
import Image from "next/image";
import { CategoryT } from "../types";
import { useTranslations } from "next-intl";
import CategoriesBentoGridSkeleton from "./CategoriesBentoGridSkeleton";
import ErrorMessage from "@/components/shared/ErrorMessage";

function CategoriesBentoGrid() {
  const t = useTranslations("home.shopByCategory");
  const { data, isLoading, isError } = useFetchCategories();

  if (isLoading) return <CategoriesBentoGridSkeleton />;

  const slugs = [
    "sportswear",
    "shoes",
    "balls",
    "supplements",
    "fitness tools",
  ];

  const featuredCategories =
    data?.data?.filter((category: CategoryT) =>
      slugs.includes(category.name.toLowerCase()),
    ) ?? [];

  const gridMap: Record<string, string> = {
    sportswear: `col-start-1 row-start-1 md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-1 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1`,
    shoes: `col-start-2 row-start-1 md:col-start-1 md:row-start-3 lg:col-start-3 lg:row-start-1`,
    balls: `col-start-1 row-start-2 md:col-start-2 md:row-start-3 lg:col-start-3 lg:row-start-2`,
    supplements: `col-start-2 row-start-2 md:col-start-1 md:row-start-4 lg:col-start-1 lg:row-start-3`,
    "fitness tools": `col-start-1 row-start-3 md:col-start-2 md:row-start-4 lg:col-start-2 lg:row-start-3`,
  };

  if (isError) return <ErrorMessage message={t("failedFetchingCategories")} />;

  return (
    <div className="flex-1 grid grid-cols-2 grid-rows-3 md:grid-cols-2 md:grid-rows-5 lg:grid-cols-3 lg:grid-rows-3 gap-4 h-162.5 md:h-225 lg:h-137.5">
      {featuredCategories.map((category: CategoryT) => (
        <Link
          key={category.id}
          href={`${ROUTES.public.products}?category=${encodeURIComponent(category.name)}`}
          className={`group relative overflow-hidden rounded-xl ${
            gridMap[category.name.toLowerCase()] ?? ""
          }`}
        >
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain bg-gray-50 scale-105 group-hover:scale-110 transition-transform duration-normal"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-normal group-hover:from-black/60" />

          <div className="absolute inset-x-0 bottom-0 p-lg z-10">
            <Heading
              as="h3"
              className="font-bold text-sm lg:text-xl text-white drop-shadow-lg"
            >
              {category.name}
            </Heading>
          </div>
        </Link>
      ))}

      <Link
        href={`${ROUTES.public.categories}`}
        className={`group flex flex-col items-center justify-center gap-md col-start-2 row-start- md:col-span-2 md:row-start- lg:col-start-3 lg:row-start-3 lg:col-span-1 py-sm md:py-md bg-accent-light border border-accent-ring hover:border-accent-base rounded-xl transition-all duration-normal overflow-hidden`}
      >
        <div className="flex flex-col items-center gap-tiny text-foreground">
          <Heading
            as="h3"
            className="font-semibold text-sm lg:text-md tracking-wide"
          >
            {t("viewAllCategories")}
          </Heading>

          <p className="text-xs lg:text-sm text-muted-foreground">
            {t("exploreCategories", {
              count: data?.data.length ?? "",
            })}
          </p>
        </div>

        <div className="p-sm group-hover:translate-x-xs text-primary-dark bg-accent-base rounded-full duration-normal">
          <Icon name="ArrowRight" className="text-current size-5" />
        </div>
      </Link>
    </div>
  );
}

export default CategoriesBentoGrid;
