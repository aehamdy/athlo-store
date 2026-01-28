"use client";

import { ReactNode } from "react";
import "../globals.css";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-base text-foreground">
        <div className="relative bg-base text-foreground">
          {children}

          <button
            type="button"
            onClick={() => document.documentElement.classList.toggle("dark")}
            className="absolute top-4 start-4"
          >
            Switch Theme
          </button>
        </div>
      </body>
    </html>
  );
}

export default AuthLayout;
