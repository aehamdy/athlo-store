import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";

export const brandLogos = {
  facebook: SiFacebook,
  instagram: SiInstagram,
  x: SiX,
  youtube: SiYoutube,
} as const;

export type BrandLogoName = keyof typeof brandLogos;
