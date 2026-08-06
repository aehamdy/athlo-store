"use client";

import { useTranslations } from "next-intl";

function HeroMarquee() {
  const t = useTranslations("home.hero");

  const items = t.raw("marquee") as string[];

  return (
    <section className="h-11 bg-accent-light border-y border-accent-ring backdrop-blur-md overflow-hidden">
      <div className="flex gap-8 w-max py-sm animate-marquee">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-lg">
            <span className="font-semibold text-xs text-foreground/80 uppercase tracking-widest">
              {item}
            </span>

            <span className="size-2 bg-accent-base rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroMarquee;
