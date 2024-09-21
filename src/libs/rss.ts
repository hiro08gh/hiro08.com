import Parser from "rss-parser";
import { formatDate } from "./date";

export const getRssFeed = async (url: string) => {
	const feed = await new Parser().parseURL(url);
	const items = feed.items.map((item) => {
		return {
			id: item.guid || "",
			title: item.title || "",
			publishedAt: item.pubDate ? formatDate(item.pubDate) : "",
			type: "Zenn",
		};
	});

	return items;
};
