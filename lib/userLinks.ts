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
    label: "Wishlist",
    href: endpoints.wishlist,
  },
];

export default userLinks;
