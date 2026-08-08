"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  name: string;
  href: string;
}

function NavLink({ href, name }: NavLinkProps) {
  const pathname = usePathname();

  const normalizedPathname = pathname.replace(/^\/(en|ar)(?=\/|$)/, "") || "/";

  const isActive =
    href === "/" ? normalizedPathname === "/" : normalizedPathname === href;

  return (
    <Link
      href={href}
      className={`block font-display lg:flex font-medium text-[1rem] ${isActive ? "text-accent-base" : "text-muted-foreground hover:text-accent-base"} tracking-wider focus-visible:text-accent-base focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-accent-base transition-colors duration-normal`}
    >
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </Link>
  );
}

export default NavLink;
