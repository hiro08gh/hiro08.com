import { PostCard } from "@/components/PostCard";
import { metadataConfig } from "@/libs/meta";
import { getPosts } from "@/libs/microcms";
import { getRssFeed } from "@/libs/rss";
import type { Metadata } from "next";

export const metadata: Metadata = metadataConfig({ title: "記事リスト" });

export default async function Page() {
	const posts = await getPosts({ limit: 100 });
	const zenn = await getRssFeed("https://zenn.dev/hiro08gh/feed");

	const target = posts.contents.map((post) => ({
		id: post.id,
		title: post.title,
		publishedAt: post.publishedAt || "",
		type: "Article",
	}));

	const sortedData = [...target, ...zenn].sort(
		(a, b) =>
			new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
	);

	return (
		<div className="mx-4 max-sm:py-4 flex flex-col gap-12">
			<h2>記事リスト</h2>
			<div>
				{sortedData.map((post) => (
					<PostCard post={post} key={post.id} />
				))}
			</div>
		</div>
	);
}
