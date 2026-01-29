"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "./shared/Icon";
import { useRef, KeyboardEvent } from "react";

function SearchModal() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleModal = (e: KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (e.key === "k" && e.ctrlKey) {
      // Open search modal
      buttonRef.current?.click();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <Button
          variant="plain"
          className="flex justify-between items-center gap-3xl text-muted-foreground lg:bg-field lg:border lg:border-subtle"
          ref={buttonRef}
          onKeyDown={handleModal}
        >
          <Icon name="Search" />

          <div className="hidden lg:block bg-subtle py-tiny px-xs rounded-sm">
            Ctrl + K
          </div>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
          <div className="flex items-center gap-2 p-tiny bg-field border-2 border-subtler focus-within:border-2 focus-within:border-accent-strong rounded-sm">
            <Icon name="Search" />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search products..."
              className="w-full outline-none"
            />
          </div>
        </DialogHeader>

        <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4">
          {/* {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))} */}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SearchModal;
