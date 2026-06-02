"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

import Icon from "../Icon";
import { Button } from "../../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { Locale } from "next-intl";

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "Arabic" },
] as const;

function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  function handleChange(locale: Locale) {
    const segments = pathname.split("/");

    segments[1] = locale;

    const newPath = segments.join("/") || "/";
    router.push(newPath);
    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="plain" aria-label="Select language">
          <Icon name="Globe" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup>
            {languages.map((lang) => (
              <DropdownMenuRadioItem
                key={lang.code}
                value={lang.code}
                onClick={() => handleChange(lang.code)}
              >
                {lang.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSwitcher;
