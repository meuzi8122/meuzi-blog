import { createClient } from "microcms-js-sdk";

const client = createClient({
    serviceDomain: import.meta.env.SERVICE_DOMAIN,
    apiKey: import.meta.env.API_KEY
});

export const findContents = async (endpoint: string, fields: string, filters?: string): Promise<{[key: string]: any}[]> => {
    return (
        await client.getList({
            endpoint: endpoint,
            queries: {
                fields: fields,
                filters: filters
            },
        })
    ).contents;
}