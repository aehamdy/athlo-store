import { getLocale } from "next-intl/server";
import "./globals.css";
import Providers from "@/lib/providers";
import { cookies } from "next/headers";
import { STORAGE_KEYS } from "@/config/constants";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";
import appConfig from "@/config/appConfig";
import { Inter, Oswald } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${oswald.variable} font-sans bg-surface`}
      >
        <Providers initialIsAuthenticated={initialIsAuthenticated}>
          {children}

          <Toaster richColors position="bottom-right" />
        </Providers>
      </body>
    </html>
  );
}
