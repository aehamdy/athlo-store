"use client";

import { useEffect, useState } from "react";
import HeaderActions from "../HeaderActions";
import Logo from "../shared/Logo";
import Nav from "../shared/Nav";
import { cn } from "@/lib/utils";

function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 start-0 z-50 w-full",
        "flex items-center justify-between",
        "bg-background/70 backdrop-blur-md",
        "py-sm px-md",
        "transition-transform duration-normal ease-in-out",
        hidden && "-translate-y-full",
      )}
    >
      <Logo />

      <div className="hidden lg:block">
        <Nav />
      </div>

      <HeaderActions />
    </header>
  );
}

export default Header;
