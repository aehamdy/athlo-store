"use client";

import { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="">
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
    </main>
  );
}

export default AuthLayout;
