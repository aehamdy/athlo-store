import ROUTES from "./routes";

export type UserLinkType = {
  id: number;
  key: string;
  href: string;
};

const userLinks: UserLinkType[] = [
  {
    id: 1,
    key: "login",
    href: ROUTES.auth.login,
  },
  {
    id: 2,
    key: "register",
    href: ROUTES.auth.register,
  },
  {
    id: 3,
    key: "faqs",
    href: ROUTES.public.faqs,
  },
];

export default userLinks;
