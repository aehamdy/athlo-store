import { ReactNode } from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
