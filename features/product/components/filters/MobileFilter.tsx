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
import { Button } from "../ui/button";
import Icon from "../shared/Icon";
import FilterContent from "../../features/product/components/filters/FilterContent";
import { Description } from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";

function MobileFilter() {
  const t = useTranslations("filters.mobileFilter");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Icon name="SlidersHorizontal" />
          {t("filter")}
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
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
            <Button variant="outline">{t("close")}</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default MobileFilter;
