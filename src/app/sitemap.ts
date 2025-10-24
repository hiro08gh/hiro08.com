import { getPosts } from "@/libs/microcms";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = "https://hiro08.com";

	// 記事を取得
	const posts = await getPosts({ limit: 100 });

	// 静的ページ
	const staticPages = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "daily" as const,
			priority: 1,
		},
		{
			url: `${baseUrl}/posts`,
			lastModified: new Date(),
			changeFrequency: "daily" as const,
			priority: 0.8,
		},
	];

	// 動的ページ（記事）
	const postPages = posts.contents.map((post) => ({
		url: `${baseUrl}/posts/${post.id}`,
		lastModified: new Date(post.updatedAt || post.publishedAt || new Date()),
		changeFrequency: "weekly" as const,
		priority: 0.6,
	}));

	return [...staticPages, ...postPages];
}
