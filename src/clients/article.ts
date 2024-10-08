import { findContents } from "./base";
import type { Article } from "./type";

type Replacement = {
  target: string;
  revision: string;
};

export class ArticleClient {
  private static endpoint = "articles";
  private static fields = "id,title,content,category.id,category.category,updatedAt";

  static async findArticles(categoryId?: string): Promise<Article[]> {
    const contents = await findContents(
      this.endpoint,
      this.fields,
      categoryId ? `category[equals]${categoryId}` : undefined
    );

    return contents.map((content) => this.parseArticle(content));
  }

  private static parseArticle(content: { [key: string]: any }): Article {
    const updatedAt = new Date(content.updatedAt);

    return {
      id: content.id,
      title: content.title,
      content: this.applyContentStyle(content.content),
      category: content.category,
      updatedAt: `${updatedAt.getFullYear()}/${updatedAt.getMonth() + 1}/${updatedAt.getDate()}`,
    };
  }

  private static applyContentStyle(content: string): string {
    const replacements: Replacement[] = [
      { target: "<h4", revision: "<h4 class='text-xl font-bold mt-5 mb-2 '" },
      { target: "<a", revision: "<a class='link link-primary' " },
    ];

    for (const replacement of replacements) {
      content = content.replaceAll(replacement.target, replacement.revision);
    }

    return content;
  }
}
