"use client";

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
      <button
        type="button"
        onClick={handleThemeSwitch}
        aria-label="Toggle theme"
        aria-describedby="theme-switcher-desc"
        className="group action-button"
      >
        <Icon
          name={isDark ? "Sun" : "MoonStar"}
          className="group-hover:text-primary-dark group-focus-visible:text-primary-dark transition-colors"
        />
      </button>

      {/* Screen-reader description */}
      <span id="theme-switcher-desc" className="sr-only">
        Switch between light and dark mode
      </span>
    </>
  );
}

export default ThemeSwitcher;
