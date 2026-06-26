const ROUTES = {
  public: {
    home: "/",
    products: "/products",
    productDetail: (id: string) => `/products/${id}`,
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
