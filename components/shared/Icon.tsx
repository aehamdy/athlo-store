import { LucideProps } from "lucide-react";
import * as Icons from "lucide-react";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof Icons;
  className?: string;
  size?: number | string;
}

function Icon({ name, className, size = 16, ...props }: IconProps) {
  const LucideIcon = Icons[name] as React.ComponentType<LucideProps>;

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in Lucide icons`);
    return null;
  }

  return (
    <LucideIcon
      className={`${className} text-muted-foreground `}
      size={size}
      {...props}
    />
  );
}

export default Icon;
