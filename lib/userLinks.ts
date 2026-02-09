import endpoints from "./endpoints";

export type UserLinkType = {
  label: string;
  href: string;
};

const userLinks: UserLinkType[] = [
  {
    label: "SignIn",
    href: endpoints.auth.signIn,
  },
  {
    label: "SignUp",
    href: endpoints.auth.signUp,
  },
  {
    label: "FAQs",
    href: endpoints.faqs,
  },
];

export default userLinks;
