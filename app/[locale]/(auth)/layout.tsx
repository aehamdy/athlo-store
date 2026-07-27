import appConfig from "@/config/appConfig";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: { default: "Authentication", template: `%s | ${appConfig.siteName}` },
  description: "Login or create an Athlo account.",
};

function AuthLayout({ children }: { children: ReactNode }) {
  return <main className="text-foreground bg-base">{children}</main>;
}

export default AuthLayout;
