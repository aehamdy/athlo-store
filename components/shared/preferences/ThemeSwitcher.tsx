"use client";

import { Button } from "@/components/ui/button";
import Icon from "../Icon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <>
      <Button
        variant="primary"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle theme"
        aria-describedby="theme-switcher-desc"
        className="group action-button w-full"
      >
        <Icon
          name={isDark ? "Sun" : "MoonStar"}
          className="group-hover:text-primary-dark transition-colors"
        />
      </Button>

      <span id="theme-switcher-desc" className="sr-only">
        Switch between light and dark mode
      </span>
    </>
  );
}

export default ThemeSwitcher;
