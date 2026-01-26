import { ReactNode } from "react";
import "../globals.css";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-base text-foreground">
        {/* Navbar */}

        {/* Side Cart */}

        {/* Main content */}
        {children}

        {/* Footer */}
      </body>
    </html>
  );
}
