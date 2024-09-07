import { createClient } from "microcms-js-sdk";

const client = createClient({
    serviceDomain: import.meta.env.SERVICE_DOMAIN,
    apiKey: import.meta.env.API_KEY
});

export const findContents = async (endpoint: string, fields: string, limit?: number): Promise<any[]> => {
    return (
        await client.getList({
            endpoint: endpoint,
            queries: {
                fields: fields,
            },
        })
    ).contents;
}