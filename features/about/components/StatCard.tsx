import { useTranslations } from "next-intl";
import { Stat } from "../types";

type StatCardProp = {
  stat: Stat;
};

function StatCard({ stat }: StatCardProp) {
  const t = useTranslations("aboutPage.stats");

  return (
    <article className="text-center">
      <p className="font-bold text-4xl md:text-5xl text-accent-base mb-xs">
        {stat.value}
      </p>

      <p className="text-muted-foreground">{t(stat.label)}</p>
    </article>
  );
}

export default StatCard;
