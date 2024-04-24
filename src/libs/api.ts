import type {
  MicroCMSQueries,
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSImage,
} from "microcms-js-sdk";
import { client } from "./client";

export type Article = {
  title: string;
  body: string;
  description: string;
  thumbnail: MicroCMSImage;
} & MicroCMSContentId &
  MicroCMSDate;

export const getArticles = async (queries?: MicroCMSQueries) => {
  return await client.getList<Article>({ endpoint: "articles", queries });
};

export const getArticle = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Article>({
    endpoint: "articles",
    contentId,
    queries,
  });
};
