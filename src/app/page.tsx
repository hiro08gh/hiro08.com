import { getAbout } from "@/libs/microcms";

import ReactMarkdown from "react-markdown";
import { parser } from "rich-editor-to-markdown-parser";

import { PostCard } from "@/components/PostCard";

import { getPosts } from "@/libs/microcms";
import { getRssFeed } from "@/libs/rss";

export default async function Page() {
	const about = await getAbout();

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
		<div className="max-sm:py-4">
			<div className="mx-4 flex flex-col gap-8 mb-8">
				<h2 className="text-3xl font-bold">hiro08gh (Hiroki Ueda)</h2>
				<ReactMarkdown
					components={{
						a(props) {
							const { node, ...rest } = props;
							return (
								<a href={rest.href} target="_blank" rel="noreferrer">
									{rest.children}
								</a>
							);
						},
					}}
				>
					{parser(about.description)}
				</ReactMarkdown>
			</div>

			<div className="mx-4 max-sm:py-4 flex flex-col gap-12">
				<h2>記事一覧</h2>
				<div>
					{sortedData.map((post) => (
						<PostCard post={post} key={post.id} />
					))}
				</div>
			</div>
		</div>
	);
}
