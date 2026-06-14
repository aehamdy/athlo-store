import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "@/components/ui/button";
import Icon from "../Icon";

function PreferencesActions() {
  return (
    <div className="flex items-center gap-xs">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="plain" className="action-button">
            <Icon name="Settings" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem className="p-0">
            <LanguageSwitcher />
          </DropdownMenuItem>

          <DropdownMenuItem className="p-0">
            <ThemeSwitcher />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default PreferencesActions;
