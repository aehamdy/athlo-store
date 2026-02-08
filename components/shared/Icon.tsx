import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import * as Icons from "lucide-react";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof Icons;
  className?: string;
  size?: number | string;
}

function Icon({ name, className, size = 16, ...props }: IconProps) {
  const LucideIcon = Icons[name] as React.ComponentType<LucideProps>;

  if (!LucideIcon) return null;

  return (
    <LucideIcon
      className={cn("text-muted-foreground", className)}
      size={size}
      {...props}
    />
  );
}

export default Icon;
