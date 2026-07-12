import Link from "next/link";
import Icon from "./shared/Icon";
import ROUTES from "@/lib/routes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import LogoutButton from "./LogoutButton";

function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="plain"
          className="action-button text-muted-foreground hover:text-primary-dark focus-visible:text-primary-dark"
        >
          <Icon name="UserRound" className="text-current" />
          <Icon name="ChevronDown" className="text-current" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel className="mb-tiny border-b">
            My Account
          </DropdownMenuLabel>

          <DropdownMenuItem asChild>
            <Link
              href={ROUTES.user.profile}
              className="flex items-center gap-sm cursor-pointer"
            >
              <Icon
                name="UserRound"
                className="group-hover:text-primary-dark group-focus-visible:text-primary-dark"
              />
              Profile
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AccountMenu;
