"use client";

import appConfig from "@/config/appConfig";
import Logo from "../../shared/Logo";
import Link from "next/link";
import Icon from "../../shared/Icon";
import Heading from "../../shared/Heading";
import navLinks from "@/lib/navLinks";
import userLinks from "@/lib/userLinks";
import { useTranslations } from "next-intl";
import NewsletterForm from "@/features/forms/NewsletterForm";
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
    <section className="grid grid-cols-3 gap-xl py-4xl">
      {/* Logo, tagline and social channels */}
      <div className="col-span-3 lg:col-span-1">
        <div className="flex flex-col gap-md">
          <Logo />

          <div className="md:w-3/5 lg:w-full">
            <p>{t("tagLine")}</p>
          </div>

          <div className="flex items-center gap-sm">
            {appConfig.social.map((channel) => {
              const SocialIcon = brandLogos[channel.name];

              return (
                <Link
                  key={channel.name}
                  href={channel.url}
                  target="_blank"
                  className="group text-lg text-muted-foreground"
                >
                  <SocialIcon className="group-hover:text-accent-base" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="col-span-3 lg:col-span-1 flex justify-between md:justify-start lg:justify-between items-start md:gap-4xl lg:gap-0">
        {/* Quick Links */}
        <div className="space-y-sm">
          <Heading as="h4" className="font-semibold text-foreground">
            {footerT("quickLinks.title")}
          </Heading>

          <ul className="flex flex-col gap-sm">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="hover:text-accent-base transition-colors duration-normal"
              >
                {navigationsT(link.key)}
              </Link>
            ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div className="space-y-sm">
          <Heading as="h4" className="font-semibold text-foreground">
            {footerT("customerService.title")}
          </Heading>

          <ul className="flex flex-col gap-sm">
            {visibleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-accent-base transition-colors duration-normal"
              >
                {navigationsT(link.label)}
              </Link>
            ))}
          </ul>

          <div className="flex flex-col gap-sm">
            <div className="flex items-center gap-sm">
              <Icon name="Phone" />
              <p>{primaryPhone}</p>
            </div>

            <div className="flex items-center gap-sm">
              <Icon name="Mail" />
              <p>{infoEmail}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-3 lg:col-span-1">
        <NewsletterForm />
      </div>
    </section>
  );
}

export default FooterMain;
