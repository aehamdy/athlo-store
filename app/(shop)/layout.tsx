import { ReactNode } from "react";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-base text-foreground">
        <Header />

        {/* Main content */}
        {children}

        <Footer />
      </body>
    </html>
  );
}
