export type Article = {
  id: string;
  title: string;
  content: string;
  category: Category;
  updatedAt: string;
};

export type Category = {
  id: string;
  category: string;
};
