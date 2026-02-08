import Icon from "../../../components/shared/Icon";
import { Value } from "../types";

type ValueCardProps = {
  value: Value;
};

function ValueCard({ value }: ValueCardProps) {
  return (
    <article className="flex flex-col items-center p-xl bg-base text-center border border-border hover:border-accent-base/50 rounded-xl transition-colors ">
      <div className="flex items-center justify-center w-14 h-14 mb-md bg-accent-base/10 rounded-full">
        <Icon name={value.icon} className="text-accent-base" size={24} />
      </div>

      <h3 className="text-lg font-semibold mb-2">{value.title}</h3>

      <p className="text-sm text-muted-foreground">{value.description}</p>
    </article>
  );
}

export default ValueCard;
