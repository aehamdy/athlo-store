"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const dropdownValues = [
  { id: 1, label: "newestFirst", value: "0" },
  { id: 2, label: "alphabetically", value: "2" },
  { id: 3, label: "priceLowToHigh", value: "6" },
];

function SortDropdown() {
  const t = useTranslations("filters.sort");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const value = searchParams.get("ordering") ?? "0";

  const handleChange = (ordering: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("ordering", ordering);

    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <Select value={value} onValueChange={handleChange}>
      <SelectTrigger className="w-40 text-foreground focus-visible:border-0 focus-visible:ring-accent-base">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>

      <SelectContent className="bg-popover">
        {dropdownValues.map((item) => (
          <SelectItem key={item.id} value={item.value}>
            {t(item.label)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SortDropdown;
