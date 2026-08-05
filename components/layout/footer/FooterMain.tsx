"use client";

import appConfig from "@/config/appConfig";
import Logo from "../../shared/Logo";
import Link from "next/link";
import Icon from "../../shared/Icon";
import Heading from "../../shared/Heading";
import navLinks from "@/lib/navLinks";
import userLinks from "@/lib/userLinks";
import { useTranslations } from "next-intl";
import NewsletterForm from "@/features/home/components/NewsletterForm";
import { useAuthStore } from "@/lib/stores/auth.store";
import { brandLogos } from "@/config/brand-logos";

function FooterMain() {
  const t = useTranslations("app");
  const navigationsT = useTranslations("navigation");
  const footerT = useTranslations("footer");

  const { isAuthenticated } = useAuthStore();

  const visibleLinks = userLinks.filter((link) => {
    switch (link.visibility) {
      case "always":
        return true;
      case "guest":
        return !isAuthenticated;
      case "authenticated":
        return isAuthenticated;
    }
  });

  const primaryPhone =
    appConfig.contact.phones.find((p) => p.label === "primary")?.value ?? "";

  const infoEmail =
    appConfig.contact.emails.find((e) => e.label === "info")?.value ?? "";

  return (
    <section className="relative flex flex-col justify-between gap-lg min-h-[50dvh] py-3xl text-black">
      <div className="grid grid-cols-3 gap-4xl">
        {/* Logo, tagline and social channels */}
        <div className="col-span-3 lg:col-span-1">
          <div className="flex flex-col gap-md">
            <div className="w-fit me-auto">
              <Logo />
            </div>

            <div className="md:w-3/5 lg:w-full">
              <p className="lg:text-md">{t("tagLine")}</p>
            </div>

            <div className="flex items-center gap-sm">
              {appConfig.social.map((channel) => {
                const SocialIcon = brandLogos[channel.name];

                return (
                  <Link
                    key={channel.name}
                    href={channel.url}
                    target="_blank"
                    className="group p-xs text-lg hover:bg-accent-soft border border-transparent hover:border-white rounded-md"
                  >
                    <SocialIcon className="text-current" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="col-span-3 lg:col-span-1 flex justify-between md:justify-around lg:justify-between items-start md:gap-4xl lg:gap-0">
          {/* Quick Links */}
          <div className="space-y-sm">
            <Heading as="h4" className="font-semibold text-md">
              {footerT("quickLinks.title")}
            </Heading>

            <ul className="flex flex-col gap-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="group flex items-center gap-tiny hover:text-white hover:gap-sm transition-all duration-normal"
                >
                  {navigationsT(link.key)}

                  <Icon
                    name="ArrowRight"
                    className="hidden group-hover:flex text-current"
                  />
                </Link>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-sm">
            <Heading as="h4" className="font-semibold text-md">
              {footerT("customerService.title")}
            </Heading>

            <ul className="flex flex-col gap-sm">
              {visibleLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-tiny hover:text-white hover:gap-sm transition-all duration-normal"
                >
                  {navigationsT(link.label)}

                  <Icon
                    name="ArrowRight"
                    className="hidden group-hover:flex text-current"
                  />
                </Link>
              ))}
            </ul>

            <div className="flex flex-col gap-sm">
              <div className="flex items-center gap-sm">
                <Icon name="Phone" className="text-current" />
                <p>{primaryPhone}</p>
              </div>

              <div className="flex items-center gap-sm">
                <Icon name="Mail" className="text-current" />
                <p>{infoEmail}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 lg:col-span-1">
          <NewsletterForm variant="footer" />
        </div>
      </div>

      <div className="font-bold text-center select-none">
        <Heading
          as="h2"
          className="text-[clamp(2.75rem,12vw,10rem)] font-bold text-black uppercase tracking-[clamp(0.25rem,1vw,1.5rem)]"
        >
          {appConfig.siteName}
        </Heading>
      </div>
    </section>
  );
}

export default FooterMain;
