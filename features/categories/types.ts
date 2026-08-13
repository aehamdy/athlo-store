export type CategoryT = {
  id: number;
  name: string;
  imageUrl: string;
  slug: string;
};

export type CategoriesResponseT = {
  data: CategoryT[];
};
