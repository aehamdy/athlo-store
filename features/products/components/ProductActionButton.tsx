import Icon from "@/components/shared/Icon";
import Tooltip from "@/components/shared/Tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProductActionButtonProps = {
  variant?: "icon" | "default";
  icon: React.ComponentProps<typeof Icon>["name"];
  label: string;
  tooltip?: "top" | "right" | "bottom" | "left";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

function ProductActionButton({
  variant = "default",
  icon,
  label,
  tooltip,
  onClick,
  disabled = false,
  className,
}: ProductActionButtonProps) {
  if (variant === "icon") {
    return (
      <div className="group/actions relative">
        <Button
          variant="plain"
          disabled={disabled}
          onClick={onClick}
          className={cn(
            "focus-visible:bg-accent-base focus-visible:text-primary-dark w-10 h-10 text-foreground hover:text-primary-dark bg-surface hover:bg-accent-base rounded-full shadow-lg",
            className,
          )}
          aria-label={label}
        >
          <Icon name={icon} className="group-hover/actions:text-current" />
        </Button>

        {label && tooltip && <Tooltip label={label} tooltip={tooltip} />}
      </div>
    );
  }

  return (
    <Button
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center gap-sm h-11 px-xs py-tiny text-xs rounded-4xl",
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <Icon name={icon} className="text-current" />

      <span className="text-current whitespace-nowrap">{label}</span>
    </Button>
  );
}

export default ProductActionButton;
