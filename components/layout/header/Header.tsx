"use client";

import HeaderActions from "@/components/layout/header/HeaderActions";
import Logo from "@/components/shared/Logo";
import Nav from "@/components/shared/Nav";
import { useEffect, useState } from "react";

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
      dir="ltr"
      className={`fixed bottom-5 lg:top-4 lg:bottom-auto left-1/2 -translate-x-1/2 w-fit lg:w-9/10 ${
        hidden
          ? "translate-y-[calc(100%+1.5rem)] lg:-translate-y-[calc(100%+1.5rem)]"
          : "translate-y-0"
      } py-xs lg:py-sm px-sm lg:px-md bg-background/80 backdrop-blur-md shadow-sm rounded-4xl z-50 transition-transform duration-normal ease-in-out`}
    >
      <div className="flex justify-between items-center">
        <div className="hidden lg:block">
          <Logo />
        </div>

        <div className="hidden lg:block">
          <Nav />
        </div>

        <HeaderActions />
      </div>
    </header>
  );
}

export default Header;
