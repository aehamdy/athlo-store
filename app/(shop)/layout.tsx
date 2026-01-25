import { ReactNode } from "react";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Navbar */}

        {/* Side Cart */}

        {/* Main content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
      </body>
    </html>
  );
}
