"use client";

import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import Icon from "../shared/Icon";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { useState } from "react";
import { Separator } from "../ui/separator";

function AvailabilityFilter() {
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    size: false,
    color: false,
    availability: false,
  });
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div>
      {" "}
      <Collapsible
        open={openSections.availability}
        onOpenChange={() => toggleSection("availability")}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full py-lg cursor-pointer">
          <span className="font-semibold">Availability</span>

          <Icon
            name="ChevronDown"
            className={cn(
              "h-4 w-4 transition-transform",
              openSections.availability && "rotate-180",
            )}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="mb-md pt-md space-y-md">
          <div className="flex items-center justify-between">
            <Label htmlFor="new-only" className="text-sm cursor-pointer">
              New Only
            </Label>

            <Switch
              id="new-only"
              checked={showNewOnly}
              onCheckedChange={setShowNewOnly}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="featured-only" className="text-sm cursor-pointer">
              Featured Only
            </Label>

            <Switch
              id="featured-only"
              checked={showFeaturedOnly}
              onCheckedChange={setShowFeaturedOnly}
              className="rounded-md"
            />
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator />
    </div>
  );
}

export default AvailabilityFilter;
