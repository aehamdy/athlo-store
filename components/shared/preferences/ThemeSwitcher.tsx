"use client";

import { Button } from "@/components/ui/button";
import Icon from "../Icon";
import { useState } from "react";

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  const handleThemeSwitch = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark((prev) => !prev);
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleThemeSwitch}
        aria-label="Toggle theme"
        aria-describedby="theme-switcher-desc"
        className="group action-button"
      >
        <Icon
          name={isDark ? "Sun" : "MoonStar"}
          className="group-hover:text-primary-dark group-focus-visible:text-primary-dark transition-colors"
        />
      </Button>

      {/* Screen-reader description */}
      <span id="theme-switcher-desc" className="sr-only">
        Switch between light and dark mode
      </span>
    </>
  );
}

export default ThemeSwitcher;
