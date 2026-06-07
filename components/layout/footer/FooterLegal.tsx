import ROUTES from "@/lib/routes";
import { useTranslations } from "next-intl";
import Link from "next/link";

const links = [
  { label: "privacyPolicy", href: ROUTES.public.privacyPolicy },
  { label: "termsOfService", href: ROUTES.public.terms },
];

function FooterLegal() {
  const t = useTranslations("navigation");
  const footerT = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-xs py-sm md:py-lg border-t border-subtle">
      <p className="">
        &copy; {currentYear} {footerT("copyright")}
      </p>

      <div className="flex items-center gap-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-accent-base transition-colors duration-normal"
          >
            {t(link.label)}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FooterLegal;
