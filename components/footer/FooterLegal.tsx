import endpoints from "@/lib/endpoints";
import Link from "next/link";

const links = [
  { label: "Privacy Policy", href: endpoints.privacyPolicy },
  { label: "Terms of Service", href: endpoints.terms },
];

function FooterLegal() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-xs py-sm md:py-lg border-t border-subtle">
      <p className="">&copy; {currentYear} Athlo Store. All rights reserved.</p>

      <div className="flex items-center gap-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-accent-base transition-colors duration-normal"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FooterLegal;
