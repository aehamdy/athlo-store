import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Icon from "./shared/Icon";
import Nav from "./shared/Nav";
import Link from "next/link";
import PreferencesActions from "./shared/preferences/PreferencesActions";
import ROUTES from "@/lib/routes";

function MobileMenu() {
  return (
    <div className="flex flex-wrap gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="plain"
            aria-label="Open mobile menu"
            aria-describedby="mobile-menu-button-desc"
            aria-haspopup="true"
            aria-controls="mobile-menu"
            className="group action-button focus-visible:text-primary-dark"
          >
            <Icon
              name="Menu"
              className="group-hover:text-primary-dark group-focus-visible:text-primary-dark"
            />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="top"
          className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh] bg-base"
        >
          <SheetHeader className="border-b border-subtle">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Main navigation and preferences menu
            </SheetDescription>
          </SheetHeader>

          <div className="no-scrollbar overflow-y-auto px-4">
            <Nav />
          </div>

          <SheetFooter className="border-t border-subtle">
            <PreferencesActions />

            <Link href={ROUTES.auth.login} className="main-button">
              Sign In
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileMenu;
