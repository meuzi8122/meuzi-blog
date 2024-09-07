import { test, expect } from "@playwright/test";

test.describe("トップページのテスト", () => {
    test("記事一覧APIから取得した結果が表示されるか", async ({ page }) => {
        /* MicroCMS APIへのアクセスをモックする */
        await page.route("*/**/api/v1/articles", async (route) => {
            route.fulfill({
                status: 200,
                body: JSON.stringify({
                    contents: [
                        {
                            id: "test-article-1", 
                            title: "テスト記事1", 
                            content: "これはテスト記事1です", 
                            category: { 
                                id: "test-category-1",
                                category: "テストカテゴリ1"
                            }
                        },
                        {
                            id: "test-article-2", 
                            title: "テスト記事2", 
                            content: "これはテスト記事2です", 
                            category: { 
                                id: "test-category-2",
                                category: "テストカテゴリ2"
                            }
                        }
                    ]
                })
            })

            await page.goto(".");

            const cards = await page.getByTestId("article-card").all();
            
            /* WAI-ARIAのロール名を指定して要素を取得する */
            /* heading → hタグに対応するロール level=2ならh2 */
            expect(await cards[0].getByRole("heading", { level: 2 }).innerText()).toBe("テスト記事1");
            expect(await cards[1].getByRole("heading", { level: 2 }).innerText()).toBe("テスト記事2");
        });
    })
});