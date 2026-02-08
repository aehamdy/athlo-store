export type ContactType = {
  numbers: {
    primary: string;
    secondary: string;
  };
  emails: {
    info: string;
    support: string;
  };
};

export type SocialType = {
  name: string;
  url: string;
  icon: string;
};

export type AppConfigType = {
  name: string;
  foundedIn: string;
  version: string;
  description: string;
  tagLine: string;
  author: string;
  contact: ContactType;
  social: SocialType[];
};

const appConfig: AppConfigType = {
  name: "Athlo",
  foundedIn: "2020",
  version: "1.0.0",
  description: "Athlo Store - Your one stop shop for all your athletic needs",
  tagLine:
    "Your premier destination for high-quality sportswear. Elevate your performance with our premium designs.",
  author: "Athlo Store",
  //   Contact
  contact: {
    // Contact Numbers
    numbers: {
      primary: "+234 801 234 5678",
      secondary: "+234 809 876 5432",
    },
    // Contact Emails
    emails: {
      info: "info@athlostore.com",
      support: "support@athlostore.com",
    },
  },
  //   Social Channels
  social: [
    { name: "facebook", url: "https://facebook.com/", icon: "Facebook" },
    { name: "instagram", url: "https://instagram.com/", icon: "Instagram" },
    { name: "twitter", url: "https://twitter.com/", icon: "Twitter" },
    { name: "youtube", url: "https://youtube.com/", icon: "Youtube" },
  ],
};

export default appConfig;
