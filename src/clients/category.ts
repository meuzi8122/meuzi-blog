import { findContents } from "./base";
import type { Category } from "./type";

export class CategoryClient { 
    private static endpoint = "categories";
    private static fields = "id,category";

    static async findCategories(): Promise<Category[]> {
        return (await findContents(this.endpoint, this.fields)).map((content) => ({
            id: content.id,
            category: content.category,
        }));
    }
}