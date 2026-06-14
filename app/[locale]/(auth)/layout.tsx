import { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return <main className="text-foreground bg-base">{children}</main>;
}

export default AuthLayout;
