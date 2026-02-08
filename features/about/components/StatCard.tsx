import { Stat } from "../types";

type StatCardProp = {
  stat: Stat;
};

function StatCard({ stat }: StatCardProp) {
  return (
    <article className="text-center">
      <p className="font-bold text-4xl md:text-5xl text-accent-base mb-xs">
        {stat.value}
      </p>

      <p className="text-muted-foreground">{stat.label}</p>
    </article>
  );
}

export default StatCard;
