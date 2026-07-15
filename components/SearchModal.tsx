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
import { useRef, useState, useEffect } from "react";
import useSearchProducts from "@/features/products/hooks/useSearchProducts";
import ProductCard from "@/features/products/components/ProductCard";

function SearchModal() {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { data } = useSearchProducts(searchValue);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="">
        <Button
          variant="plain"
          className="flex justify-between items-center gap-3xl text-muted-foreground lg:bg-field lg:border lg:border-subtle"
          ref={buttonRef}
        >
          <Icon name="Search" />

          <div className="hidden lg:block bg-subtle py-tiny px-xs rounded-sm">
            Ctrl + K
          </div>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-9/10 lg:max-w-1/2 h-[70dvh] overflow-y-auto">
        <DialogHeader className="sticky top-0 bg-surface py-2 px-2 md:px-4 lg:px-8 shadow-xs z-50">
          <DialogTitle>
            <span className="">Search</span>
          </DialogTitle>
          <DialogDescription className="sr-only">
            Search for products
          </DialogDescription>

          <div className="flex items-center gap-2 p-tiny bg-field border-2 border-subtler focus-within:border-2 focus-within:border-accent-strong rounded-sm">
            <Icon name="Search" />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full outline-none"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  console.log(searchValue);
                }
              }}
            />
          </div>
        </DialogHeader>

        {data?.data?.length === 0 ? (
          <div className="flex justify-center items-center h-20 text-muted-foreground">
            <p className="">There are no results for your search!</p>
          </div>
        ) : (
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-md py-2 px-4 lg:px-10">
            {data?.data?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                variant="search"
                onClick={() => setOpen(false)}
              />
            ))}
          </ul>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default SearchModal;
