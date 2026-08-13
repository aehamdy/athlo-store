"use client";

import { useState, useMemo } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import useFetchCategories from "@/features/categories/hooks/useFetchCategories";
import { Separator } from "@/components/ui/separator";
import { CategoryT } from "@/features/categories/types";

function CategoryFilter() {
  const { data } = useFetchCategories();

  const t = useTranslations("filters.categoryFilter");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categories = data?.data ?? [];

  const selectedCategory = useMemo(
    () => searchParams.get("category") ?? "all",
    [searchParams],
  );

  const [openSections, setOpenSections] = useState({
    category: false,
    brand: false,
    // size: false,
    // color: false,
    // availability: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      <Collapsible
        open={openSections.category}
        onOpenChange={() => toggleSection("category")}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full py-lg cursor-pointer">
          <span className="font-semibold text-foreground">{t("title")}</span>

          <Icon
            name="ChevronDown"
            className={cn(
              "h-4 w-4 transition-transform",
              openSections.category && "rotate-180",
            )}
          />
        </CollapsibleTrigger>

        <CollapsibleContent className="pt-xs">
          <ul className="max-h-70 mb-md space-y-tiny overflow-y-scroll">
            <Button
              variant="plain"
              onClick={() => handleCategoryChange("all")}
              className={cn(
                "flex justify-start w-full px-sm py-xs rounded-lg",
                selectedCategory === "all"
                  ? "text-primary-dark bg-accent-soft/70 hover:bg-accent-base"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent-strong",
              )}
            >
              {t("all")}
            </Button>

            {categories.map((category: CategoryT) => (
              <li key={category.id} className="">
                <Button
                  key={category.id}
                  variant="plain"
                  onClick={() => handleCategoryChange(category.slug)}
                  className={cn(
                    "flex justify-start w-full px-sm py-xs rounded-lg transition-colors cursor-pointer",
                    selectedCategory === category.slug
                      ? "text-primary-dark bg-accent-soft/70 hover:bg-accent-base"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent-strong",
                  )}
                >
                  {category.name}
                </Button>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>

      <Separator />
    </div>
  );
}

export default CategoryFilter;
