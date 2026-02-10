"use client";

import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import Icon from "../shared/Icon";
import { Button } from "../ui/button";
import { useState } from "react";
import { products } from "./ProductsGrid";
import { Separator } from "../ui/separator";

const allColors = Array.from(
  new Map(products.flatMap((p) => p.colors).map((c) => [c.name, c])).values(),
);

function ColorFilter() {
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    size: false,
    color: false,
    availability: false,
  });
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleColorToggle = (colorName: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorName)
        ? prev.filter((c) => c !== colorName)
        : [...prev, colorName],
    );
  };

  return (
    <div>
      <Collapsible
        open={openSections.color}
        onOpenChange={() => toggleSection("color")}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full py-lg cursor-pointer">
          <span className="font-semibold">Color</span>

          <Icon
            name="ChevronDown"
            className={cn(
              "h-4 w-4 transition-transform",
              openSections.color && "rotate-180",
            )}
          />
        </CollapsibleTrigger>

        <CollapsibleContent className="pt-md">
          <div className="flex flex-wrap gap-md mb-md">
            {allColors.map((color) => (
              <Button
                key={color.name}
                onClick={() => handleColorToggle(color.name)}
                className={cn(
                  "flex items-center justify-center w-8 h-8 border-md rounded-full transition-all",
                  selectedColors.includes(color.name)
                    ? "border-accent-base ring-2 ring-accent-base ring-offset-2 ring-offset-background"
                    : "border-subtle hover:border-accent-base",
                )}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              >
                {selectedColors.includes(color.name) && (
                  <span
                    className={cn(
                      "font-bold text-xs",
                      color.hex === "#ffffff" || color.hex === "#e0e0e0"
                        ? "text-gray-800"
                        : "text-white",
                    )}
                  >
                    ✓
                  </span>
                )}
              </Button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Separator />
    </div>
  );
}

export default ColorFilter;
