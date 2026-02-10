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
import FilterContent from "./FilterContent";

function MobileFilter() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Icon name="SlidersHorizontal" />
          Filter
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
        </SheetHeader>
        <Separator />

        <div className="px-sm">
          <FilterContent />
        </div>

        <SheetFooter>
          <Button type="submit">Apply Filters</Button>

          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default MobileFilter;
