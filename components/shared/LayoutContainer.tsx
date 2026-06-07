import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type LayoutContainerProps = {
  className?: string;
  children: ReactNode;
};

function LayoutContainer({ className, children }: LayoutContainerProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-center items-center gap-md w-full h-full px-base text-center bg-accent-light",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default LayoutContainer;
