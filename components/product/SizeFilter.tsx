"use client";

import { cn } from "@/lib/utils";
import Icon from "../shared/Icon";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";
import { products } from "./ProductsGrid";
import { useState } from "react";
import { Separator } from "../ui/separator";

const allSizes = Array.from(
  new Set(products.flatMap((p) => p.sizes).filter((s) => s !== "One Size")),
);

function SizeFilter() {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    size: false,
    color: false,
    availability: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleSizeToggle = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );
  };

  return (
    <div>
      <Collapsible
        open={openSections.size}
        onOpenChange={() => toggleSection("size")}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full py-lg cursor-pointer">
          <span className="font-semibold">Size</span>
          <Icon
            name="ChevronDown"
            className={cn(
              "h-4 w-4 transition-transform",
              openSections.size && "rotate-180",
            )}
          />
        </CollapsibleTrigger>

        <CollapsibleContent className="pt-md">
          <div className="flex flex-wrap gap-md mb-md">
            {allSizes.map((size) => (
              <Button
                key={size}
                onClick={() => handleSizeToggle(size)}
                className={cn(
                  "px-sm py-xs text-xs border border-subtle rounded-md transition-colors",
                  selectedSizes.includes(size)
                    ? "text-primary-dark bg-accent-strong hover:bg-accent-soft border-accent-base"
                    : "font-light text-foreground hover:text-foreground bg-base hover:bg-base border-subtle hover:border-accent-base",
                )}
              >
                {size}
              </Button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Separator />
    </div>
  );
}

export default SizeFilter;
