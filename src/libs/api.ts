import { MicroCMSQueries } from "microcms-js-sdk";
import { client } from "./client";
import { Article } from "@/entity/articles";

export const getArticleList = async (limit: number) => {
  const res = await client.getList<Article>({
    endpoint: "articles",
    queries: { limit },
  });

  return res.contents;
};

export const getArticleDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const res = await client.getListDetail<Article>({
    endpoint: "articles",
    contentId,
    queries,
  });

  return res;
};
