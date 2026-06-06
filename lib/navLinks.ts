import ROUTES from "./routes";

export type NavItemType = {
  id: number;
  key: string;
  href: string;
};

const navLinks: NavItemType[] = [
  {
    id: 1,
    key: "home",
    href: ROUTES.public.home,
  },
  {
    id: 2,
    key: "products",
    href: ROUTES.public.products,
  },
  {
    id: 3,
    key: "about",
    href: ROUTES.public.about,
  },
  {
    id: 4,
    key: "contact",
    href: ROUTES.public.contact,
  },
];

export default navLinks;
