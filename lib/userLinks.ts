import ROUTES from "./routes";

export type UserLinkType = {
  id: number;
  key: string;
  href: string;
};

const userLinks: UserLinkType[] = [
  {
    id: 1,
    key: "signIn",
    href: ROUTES.auth.signIn,
  },
  {
    id: 2,
    key: "signUp",
    href: ROUTES.auth.signUp,
  },
  {
    id: 3,
    key: "faqs",
    href: ROUTES.public.faqs,
  },
];

export default userLinks;
