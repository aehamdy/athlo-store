import ROUTES from "./routes";

export type UserLinkType = {
  id: number;
  label: string;
  href: string;
  visibility: "always" | "guest" | "authenticated";
};

const userLinks: UserLinkType[] = [
  {
    id: 1,
    label: "login",
    href: ROUTES.auth.login,
    visibility: "guest",
  },
  {
    id: 2,
    label: "register",
    href: ROUTES.auth.register,
    visibility: "guest",
  },
  {
    id: 3,
    label: "account",
    href: ROUTES.user.profile,
    visibility: "authenticated",
  },
  {
    id: 4,
    label: "privacyPolicy",
    href: ROUTES.public.privacyPolicy,
    visibility: "always",
  },
  {
    id: 5,
    label: "termsOfService",
    href: ROUTES.public.terms,
    visibility: "always",
  },
  {
    id: 6,
    label: "faqs",
    href: ROUTES.public.faqs,
    visibility: "always",
  },
];

export default userLinks;
