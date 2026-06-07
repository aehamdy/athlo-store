const ROUTES = {
  public: {
    home: "/",
    products: "/products",
    productDetail: (slug: string) => `/products/${slug}`,
    about: "/about",
    contact: "/contact",
    profile: "/profile",
    checkout: "/checkout",
    thankyou: "/thank-you",
    privacyPolicy: "/privacy-policy",
    terms: "/terms-and-conditions",
    faqs: "/faqs",
  },
  user: {
    profile: "/profile",
  },
  auth: {
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password",
  },
};

export default ROUTES;
