"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const currencies = ["USD", "EGP", "SAR"] as const;

function CurrencySwitcher() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="primary"
          aria-label="Select currency"
          aria-describedby="currency-switcher-desc"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls="currency-menu"
          onClick={() => setOpen((prev) => !prev)}
          className="group"
        >
          USD
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup
          // value={paymentMethod}
          // onValueChange={setPaymentMethod}
          >
            {currencies.map((currency) => (
              <DropdownMenuRadioItem key={currency} value={currency}>
                {currency}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CurrencySwitcher;
