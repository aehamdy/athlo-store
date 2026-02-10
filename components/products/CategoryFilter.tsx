"use client";

import { useState, useMemo } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import Icon from "../shared/Icon";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const categories = [
  { id: "all", name: "All", nameAr: "الكل" },
  { id: "men", name: "Men", nameAr: "رجال" },
  { id: "women", name: "Women", nameAr: "نساء" },
  { id: "shoes", name: "Shoes", nameAr: "أحذية" },
  { id: "accessories", name: "Accessories", nameAr: "إكسسوارات" },
];

function CategoryFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedCategory = useMemo(
    () => searchParams.get("category") ?? "all",
    [searchParams],
  );

  const [openSections, setOpenSections] = useState({
    category: false,
    price: false,
    size: false,
    color: false,
    availability: false,
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
      {/* Category Filter */}
      <Collapsible
        open={openSections.category}
        onOpenChange={() => toggleSection("category")}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full py-lg cursor-pointer">
          <span className="font-semibold">Category</span>
          <Icon
            name="ChevronDown"
            className={cn(
              "h-4 w-4 transition-transform",
              openSections.category && "rotate-180",
            )}
          />
        </CollapsibleTrigger>

        <CollapsibleContent className="pt-xs">
          <div className="mb-md space-y-tiny">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="plain"
                onClick={() => handleCategoryChange(category.id)}
                className={cn(
                  "flex justify-start w-full px-sm py-xs rounded-lg transition-colors cursor-pointer",
                  selectedCategory === category.id
                    ? "text-primary-dark bg-accent-base/90 hover:bg-accent-base"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Separator />
    </div>
  );
}

export default CategoryFilter;
