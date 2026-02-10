const endpoints = {
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
  auth: {
    signIn: "/sign-in",
    signUp: "/sign-up",
    forgotPassword: "/forgot-password",
  },
};

export default endpoints;
