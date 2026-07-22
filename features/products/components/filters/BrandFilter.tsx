"use client";

import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import useFetchBrands from "../../hooks/useFetchBrands";
import { BrandT } from "../../types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

function BrandFilter() {
  const { data } = useFetchBrands();

  const t = useTranslations("filters.brandsFilter");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const brands = data?.data ?? [];

  const selectedBrand = useMemo(
    () => searchParams.get("brand") ?? "all",
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

  const handleBrandChange = (brand: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (brand === "all") {
      params.delete("brand");
    } else {
      params.set("brand", brand);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      <Collapsible
        open={openSections.brand}
        onOpenChange={() => toggleSection("brand")}
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
              onClick={() => handleBrandChange("all")}
              className={cn(
                "flex justify-start w-full px-sm py-xs rounded-lg",
                selectedBrand === "all"
                  ? "text-primary-dark bg-accent-soft/70 hover:bg-accent-base"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent-strong",
              )}
            >
              All
            </Button>

            {brands.map((brand: BrandT) => (
              <li key={brand.id} className="">
                <Button
                  key={brand.id}
                  variant="plain"
                  onClick={() => handleBrandChange(brand.name)}
                  className={cn(
                    "flex justify-start w-full px-sm py-xs rounded-lg transition-colors cursor-pointer",
                    selectedBrand === brand.name
                      ? "text-primary-dark bg-accent-soft/70 hover:bg-accent-base"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent-strong",
                  )}
                >
                  {brand.name}
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

export default BrandFilter;
