"use client";

import Icon from "../Icon";
import { Button } from "../../ui/button";
import { usePathname, useRouter } from "next/navigation";

const languages = {
  en: "ar",
  ar: "en",
} as const;

function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1] as "en" | "ar";
  const nextLocale = languages[currentLocale] ?? "en";

  const handleToggle = () => {
    const segments = pathname.split("/");

    // replace locale segment
    segments[1] = nextLocale;

    const newPath = segments.join("/") || "/";

    router.push(newPath);
    router.refresh();
  };

  return (
    <Button
      onClick={handleToggle}
      variant="primary"
      aria-label="Switch language"
      className="w-full"
    >
      <Icon name="Globe" className="text-current" />
      <span className="uppercase">{nextLocale}</span>
    </Button>
  );
}

export default LanguageSwitcher;
