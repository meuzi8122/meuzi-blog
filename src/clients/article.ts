import { findContents } from "./base";
import type { Article } from "./type";

export class ArticleClient { 
    private static endpoint = "articles";
    private static fields = "id,title,content,category.id,category.category,createdAt";

    static async findArticles(categoryId?: string): Promise<Article[]> {
        const contents = await findContents(this.endpoint, this.fields, categoryId ? `category[equals]${categoryId}` : undefined);

        return contents.map((content) => this.parseArticle(content));
    }

    private static parseArticle(content: {[key: string]: any}) {
        const createdAt = new Date(content.createdAt);

        return {
            id: content.id,
            title: content.title,
            content: content.content,
            category: content.category,
            createdAt:`${createdAt.getFullYear()}/${createdAt.getMonth() + 1}/${createdAt.getDate()}`,
        }
    }

}