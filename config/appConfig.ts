import { AppConfig } from "./appConfigTypes";

const appConfig: AppConfig = {
  name: "Athlo",
  slug: "athlo-store",
  author: "Athlo Store",
  logoText: "Athlo Store",
  foundedIn: "2026",
  description: "Athlo Store - Your one stop shop for all your athletic needs",
  version: "1.0.0",

  contact: {
    phones: [
      { label: "primary", value: "+234 801 234 5678" },
      { label: "secondary", value: "+234 809 876 5432" },
    ],
    emails: [
      { label: "info", value: "info@athlostore.com" },
      { label: "support", value: "support@athlostore.com" },
    ],
  },

  locations: [
    {
      name: "Cairo",
      addresses: [
        {
          street: "123 Sports Street",
          city: "Cairo",
          country: "Egypt",
          contact: "+201 234 5678",
        },
        {
          street: "456 Sports Street",
          city: "Cairo",
          country: "Egypt",
          contact: "+201 876 5432",
        },
      ],
    },
    {
      name: "Alexandria",
      addresses: [
        {
          street: "789 Sports Street",
          city: "Alexandria",
          country: "Egypt",
          contact: "+201 555 5555",
        },
      ],
    },
  ],

  social: [
    { name: "facebook", url: "https://facebook.com/", icon: "Facebook" },
    { name: "instagram", url: "https://instagram.com/", icon: "Instagram" },
    { name: "twitter", url: "https://twitter.com/", icon: "Twitter" },
    { name: "youtube", url: "https://youtube.com/", icon: "Youtube" },
  ],
};

export default appConfig;
