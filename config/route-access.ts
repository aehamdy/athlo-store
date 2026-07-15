import ROUTES from "@/lib/routes";

const routeAccess = {
  public: [
    ROUTES.public.home,
    ROUTES.public.products,
    ROUTES.public.about,
    ROUTES.public.contact,
    ROUTES.public.checkout,
  ],
  guest: [ROUTES.auth.login, ROUTES.auth.register],
  protected: [ROUTES.user.profile],
};

export default routeAccess;
