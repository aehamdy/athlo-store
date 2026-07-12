"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";

type SortOption = "newest" | "price-low" | "price-high";

function SortDropdown() {
  const t = useTranslations("filters.sort");
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  return (
    <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
      <SelectTrigger className="w-40 text-foreground">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>

      <SelectContent className="bg-popover">
        <SelectItem value="newest">{t("newest")}</SelectItem>
        <SelectItem value="price-low">{t("priceLowToHigh")}</SelectItem>
        <SelectItem value="price-high">{t("priceHighToLow")}</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default SortDropdown;
