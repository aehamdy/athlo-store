export type ProductType = {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  category: string;
  categoryAr: string;
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  isNew?: boolean;
  isFeatured?: boolean;
};
