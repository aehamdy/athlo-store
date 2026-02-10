"use client";

import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";
import Icon from "../shared/Icon";
import { useState } from "react";
import { products } from "./ProductsGrid";
import { Separator } from "../ui/separator";

function PriceRangeFilter() {
  const [openSections, setOpenSections] = useState({
    category: false,
    price: false,
  });

  const minProductPrice = Math.min(...products.map((p) => p.price));
  const maxProductPrice = Math.max(...products.map((p) => p.price));

  const [priceRange, setPriceRange] = useState<[number, number]>([
    minProductPrice,
    maxProductPrice,
  ]);

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="">
      {/* Price Range Filter */}
      <Collapsible
        open={openSections.price}
        onOpenChange={() => toggleSection("price")}
      >
        <CollapsibleTrigger className="flex w-full items-center justify-between py-lg cursor-pointer">
          <span className="font-semibold">Price Range</span>

          <Icon
            name="ChevronDown"
            className={cn(
              "h-4 w-4 transition-transform",
              openSections.category && "rotate-180",
            )}
          />
        </CollapsibleTrigger>

        <CollapsibleContent className="mb-md pt-md space-y-md">
          <Slider
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            min={minProductPrice}
            max={maxProductPrice}
            step={5}
            className="w-full"
          />

          <div className="flex items-center gap-sm">
            <div className="flex-1">
              <Label className="text-xs text-muted-foreground">minPrice</Label>

              <Input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                min={minProductPrice}
                max={priceRange[1]}
                className="h-9 mt-tiny text-foreground bg-field"
              />
            </div>

            <span className="text-muted-foreground mt-lg">-</span>

            <div className="flex-1">
              <Label className="text-xs text-muted-foreground">maxPrice</Label>
              <Input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                min={priceRange[0]}
                max={maxProductPrice}
                className="h-9 mt-tiny text-foreground bg-field"
              />
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            {priceRange[0]} - {priceRange[1]}
          </p>
        </CollapsibleContent>
      </Collapsible>

      <Separator />
    </div>
  );
}

export default PriceRangeFilter;
