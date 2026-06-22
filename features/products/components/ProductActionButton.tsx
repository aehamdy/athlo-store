import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProductActionButtonProps = {
  variant?: "icon" | "default";
  icon: React.ComponentProps<typeof Icon>["name"];
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

function ProductActionButton({
  variant = "default",
  icon,
  label,
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

        <span
          className="
          absolute
          top-1/2
          right-full
          -translate-y-1/2
          group-hover/actions:-translate-x-xs
          opacity-0
          group-hover/actions:opacity-100
          scale-90
          group-hover/actions:scale-95
          px-xs
          py-tiny
          text-xs
          text-foreground
          bg-surface
          whitespace-nowrap
          rounded-xs
          shadow-lg
          transition-all 
          duration-300
          pointer-events-none
        "
        >
          {label}
        </span>
      </div>
    );
  }

  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      className={cn("flex items-center gap-sm", className)}
      aria-label={label}
    >
      <Icon name={icon} />

      <span className="py-tiny px-xs text-xs text-white bg-black rounded-xs whitespace-nowrap">
        {label}
      </span>
    </Button>
  );
}

export default ProductActionButton;
