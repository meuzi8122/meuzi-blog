import { findContents } from "./base";
import type { Article } from "./type";

export class ArticleClient { 
    private static endpoint = "articles";
    private static fields = "id,title,content,category.id,category.category,createdAt";

    static async findArticles(): Promise<Article[]> {
        return (await findContents(this.endpoint, this.fields)).map((content) => ({
            id: content.id,
            title: content.title,
            content: content.content,
            category: content.category,
            createdAt: content.createdAt
        }));
    }

}