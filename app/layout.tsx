import { getLocale } from "next-intl/server";
import "./globals.css";
import Providers from "@/lib/providers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
