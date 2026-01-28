"use client";

import { useState } from "react";
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

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "Arabic" },
] as const;

function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="plain"
          aria-label="Select language"
          aria-describedby="language-switcher-desc"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls="language-menu"
          className="group action-button focus-visible:text-primary-dark"
        >
          <Icon
            name="Globe"
            className="group-hover:text-primary-dark group-focus-visible:text-primary-dark"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="">
        <DropdownMenuGroup>
          {/* <DropdownMenuLabel>Select Payment Method</DropdownMenuLabel> */}
          <DropdownMenuRadioGroup
          // value={paymentMethod}
          // onValueChange={setPaymentMethod}
          >
            {languages.map((lang) => (
              <DropdownMenuRadioItem key={lang.code} value={lang.code}>
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
