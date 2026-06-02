export type AppConfig = {
  name: string;
  slug: string;
  author: string;
  logoText: string;
  foundedIn: string;
  description: string;
  tagLine: string;
  version: string;

  contact: Contact;

  locations: Location[];

  social: SocialLink[];
};

type Contact = {
  phones: ContactPhone[];
  emails: ContactEmail[];
};

type ContactPhone = {
  label: "primary" | "secondary" | string;
  value: string;
};

type ContactEmail = {
  label: "info" | "support" | string;
  value: string;
};

type Address = {
  street: string;
  city: string;
  country: string;
  contact?: string;
};

type Location = {
  name: string;
  addresses: Address[];
};

type SocialLink = {
  name: string;
  url: string;
  icon: string;
};
