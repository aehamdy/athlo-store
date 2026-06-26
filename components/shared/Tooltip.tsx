type TooltipProps = {
  tooltip: "top" | "right" | "bottom" | "left";
  label: string;
};

function Tooltip({ tooltip, label }: TooltipProps) {
  const yPosition =
    "top-1/2 -translate-y-1/2 group-hover/actions:-translate-x-xs";
  const xPosition =
    "start-1/2 -translate-x-1/2 group-hover/actions:-translate-y-xs";

  const position =
    tooltip === "left"
      ? `right-full ${yPosition}`
      : tooltip === "right"
        ? `left-full ${yPosition}`
        : tooltip === "top"
          ? `bottom-full ${xPosition}`
          : tooltip === "bottom" && `top-full ${xPosition}`;

  return (
    <span
      className={`absolute  ${position} opacity-0 group-hover/actions:opacity-100 scale-90 group-hover/actions:scale-95 px-xs py-tiny text-xs text-foreground bg-surface whitespace-nowrap rounded-xs shadow-lg transition-all  duration-300 pointer-events-none`}
    >
      {label}
    </span>
  );
}

export default Tooltip;
