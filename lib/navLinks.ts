import endpoints from "./endpoints";

export type NavItemType = {
  name: string;
  href: string;
};

const navLinks: NavItemType[] = [
  {
    name: "Home",
    href: endpoints.home,
  },
  {
    name: "Products",
    href: endpoints.products,
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

export default navLinks;
