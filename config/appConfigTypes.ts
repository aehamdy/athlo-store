import { BrandLogoName } from "./brand-logos";

export type AppConfig = {
  name: string;
  slug: string;
  author: string;
  logoText: string;
  foundedIn: string;
  description: string;
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

export type SocialLink = {
  name: BrandLogoName;
  url: string;
};
