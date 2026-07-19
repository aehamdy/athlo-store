import { getLocale } from "next-intl/server";
import "./globals.css";
import Providers from "@/lib/providers";
import { cookies } from "next/headers";
import { STORAGE_KEYS } from "@/config/constants";
import { Toaster } from "@/components/ui/sonner";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const cookieStore = await cookies();

  const initialIsAuthenticated = cookieStore.has(STORAGE_KEYS.accessToken);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <Providers initialIsAuthenticated={initialIsAuthenticated}>
          {children}

          <Toaster richColors position="bottom-right" />
        </Providers>
      </body>
    </html>
  );
}
