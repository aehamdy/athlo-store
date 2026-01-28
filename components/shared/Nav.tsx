import endpoints from "@/lib/endpoints";
import Link from "next/link";
import NavLink from "../NavLink";

const navItems = [
  {
    name: "Home",
    href: endpoints.home,
  },
  {
    name: "Products",
    href: endpoints.product,
  },
  {
    name: "About",
    href: endpoints.about,
  },
  {
    name: "Contact",
    href: endpoints.contact,
  },
];

function Nav() {
  return (
    <nav className="">
      <ul className="flex flex-col lg:flex-row items-center gap-md">
        {navItems.map((item) => (
          <li key={item.name} className="w-full lg:w-fit">
            <NavLink href={item.href} name={item.name} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
