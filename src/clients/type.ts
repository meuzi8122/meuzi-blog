export type Article = {
    id: string;
    title: string;
    content: string;
    category: Category;
    createdAt: string;
}

export type Category = {
    id: string;
    category: string;
}