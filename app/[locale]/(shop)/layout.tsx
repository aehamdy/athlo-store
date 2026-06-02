import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
