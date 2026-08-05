import Link from "next/link";
import Heading from "@/components/shared/Heading";
import Icon from "@/components/shared/Icon";
import ROUTES from "@/lib/routes";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import appConfig from "@/config/appConfig";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "The page you're looking for doesn't exist or may have been moved. Browse our premium sportswear, footwear, and fitness products instead.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: `404 - Page Not Found | ${appConfig.siteName}`,
    description:
      "The requested page could not be found. Explore our premium sportswear collection.",
    type: "website",
    url: `${appConfig.url}/404`,
  },
  twitter: {
    card: "summary",
    title: `404 - Page Not Found | ${appConfig.siteName}`,
    description:
      "The requested page could not be found. Return to the homepage or browse our products.",
  },
};

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <main className="relative flex justify-center items-center h-dvh py-8xl px-lg bg-surface overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-24 top-16 size-80 rounded-full bg-accent-base/10 blur-3xl" />
        <div className="absolute -right-24 bottom-16 size-112 rounded-full bg-accent-base/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 size-160 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-ring/30" />

        <div className="absolute left-1/2 top-1/2 104 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent-ring/40" />

        <div className="absolute left-0 top-1/2 h-px w-full bg-linear-to-r from-transparent via-accent-ring/40 to-transparent" />

        <div className="absolute left-1/2 top-0 h-full w-px bg-linear-to-b from-transparent via-accent-ring/40 to-transparent" />
      </div>

      <div className="relative flex flex-col items-center w-full text-center z-10">
        {/* 404 */}
        <div className="mb-8 flex items-center gap-2">
          <span className="font-display text-[6rem] leading-none font-bold text-foreground sm:text-[8rem] lg:text-[11rem]">
            4
          </span>

          <div className="relative flex justify-center items-center size-24 lg:size-32">
            <div className="absolute inset-0 border-2 border-accent-ring/40 rounded-full" />

            <div className="size-12 lg:size-10xl bg-accent-base rounded-full shadow-[0_0_40px_rgba(180,180,180,.25)] animate-bounce " />
          </div>

          <span className="font-display font-bold text-[6rem] text-foreground sm:text-[8rem] lg:text-[11rem] leading-none">
            4
          </span>
        </div>

        <Heading
          as="h1"
          className="mb-md font-bold text-4xl lg:text-6xl uppercase"
        >
          {t("title")}
        </Heading>

        <p className="md:w-3/4 lg:w-1/2 mb-8 text-md lg:text-lg text-muted-foreground">
          {t("description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-md">
          <Link
            href={ROUTES.public.home}
            className="flex items-center gap-sm py-sm px-md text-primary-dark bg-accent-soft hover:bg-accent-base rounded-md duration-normal"
          >
            <Icon name="House" className="size-5 text-current" />
            {t("backToHome")}
          </Link>

          <Link
            href={ROUTES.public.products}
            className="flex items-center gap-sm py-sm px-md text-primary-dark bg-gray-200 hover:bg-accent-base border border-transparent hover:border-accent-base rounded-md duration-normal"
          >
            <Icon name="Search" className="size-5 text-current" />
            {t("browseProducts")}
          </Link>
        </div>
      </div>
    </main>
  );
}
