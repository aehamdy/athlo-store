import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Description } from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";
import FilterContent from "./FilterContent";

function MobileFilter() {
  const t = useTranslations("filters.mobileFilter");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="text-foreground">
          <Icon name="SlidersHorizontal" />
          {t("filter")}
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="sm:max-w-100">
        <SheetHeader>
          <SheetTitle>{t("title")}</SheetTitle>
        </SheetHeader>

        <Description className="sr-only">{t("description")}</Description>
        <Separator />

        <div className="px-sm">
          <FilterContent />
        </div>

        <SheetFooter>
          <Button type="submit">{t("apply")}</Button>

          <SheetClose asChild>
            <Button variant="outline" className="text-foreground">
              {t("close")}
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default MobileFilter;
