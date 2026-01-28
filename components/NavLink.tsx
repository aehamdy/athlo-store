import Link from "next/link";

interface NavLinkProps {
  name: string;
  href: string;
}

function NavLink({ href, name }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="block lg:flex font-medium text-sm text-muted-foreground hover:text-accent-base focus-visible:text-accent-base focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-accent-base transition-colors duration-normal"
    >
      {name}
    </Link>
  );
}

export default NavLink;
