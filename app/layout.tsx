import { getLocale } from "next-intl/server";
import "./globals.css";
import Providers from "@/lib/providers";
import { cookies } from "next/headers";
import { STORAGE_KEYS } from "@/config/constants";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";
import appConfig from "@/config/appConfig";
import { IBM_Plex_Sans_Arabic, Inter, Oswald, Tajawal } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: appConfig.siteName,
    template: `%s | ${appConfig.siteName}`,
  },

  description:
    "Discover premium sportswear, running shoes, training apparel, and athletic accessories designed to elevate your performance.",

  keywords: [
    "sportswear",
    "athletic apparel",
    "running shoes",
    "fitness clothing",
    "sports gear",
    "athlo store",
    "training apparel",
    "activewear",
  ],

  openGraph: {
    title: `${appConfig.siteName} | Premium Sportswear & Athletic Gear`,
    description:
      "Shop premium sportswear, running shoes, and training apparel built for performance.",
    url: appConfig.url,
    siteName: appConfig.siteName,
    type: "website",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: appConfig.siteName,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${appConfig.siteName} | Premium Sportswear & Athletic Gear`,
    description:
      "Shop premium sportswear, running shoes, and training apparel built for performance.",
    images: ["/images/og-home.jpg"],
  },

  alternates: {
    canonical: "/",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const cookieStore = await cookies();

  const initialIsAuthenticated = cookieStore.has(STORAGE_KEYS.accessToken);

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${inter.variable} ${oswald.variable} ${tajawal.variable} ${ibmPlexSansArabic.variable}`}
      suppressHydrationWarning
    >
      <body className="font-content bg-surface">
        <Providers initialIsAuthenticated={initialIsAuthenticated}>
          {children}
        </Providers>

        <Toaster
          position="bottom-right"
          closeButton
          richColors
          toastOptions={{
            className: "font-medium text-sm border rounded-xl !shadow-xl",
            classNames: {
              success: "!bg-emerald-100 !text-emerald-700 !border-emerald-400",
              error: "!bg-red-100 !text-red-600 !border-red-400",
              warning: "!bg-amber-100 !text-amber-600 !border-amber-400",
              info: "!bg-blue-100 !text-blue-600 !border-blue-400",
              actionButton:
                "!bg-white !text-black !hover:bg-gray-200 !rounded-md !px-3",
              closeButton: "!text-foreground",
            },
          }}
        />
      </body>
    </html>
  );
}
