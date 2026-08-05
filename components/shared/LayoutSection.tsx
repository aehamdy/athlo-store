import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type LayoutSectionProps = {
  className?: string;
  children: ReactNode;
};

function LayoutSection({ className, children }: LayoutSectionProps) {
  return (
    <section className={cn("h-[50dvh] bg-card overflow-hidden", className)}>
      {children}
    </section>
  );
}

export default LayoutSection;
