import { PostCard } from "@/components/PostCard";
import { metadataConfig } from "@/libs/meta";
import { getPosts, getTag } from "@/libs/microcms";
import type { Metadata } from "next";

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({
	params,
}: Props): Promise<Metadata> {
	const { slug } = await params;
	const tag = await getTag(slug);

	return metadataConfig({ title: tag.name });
}

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const posts = await getPosts({ limit: 10, filters: `tags[contains]${slug}` });
	const tag = await getTag(slug);

	const target = posts.contents.map((post) => ({
		id: post.id,
		title: post.title,
		publishedAt: post.publishedAt || "",
		type: "Article",
		description: post.description,
	}));

	if (target.length === 0) {
		return (
			<div className="mx-4 max-sm:py-4">
				<p className="text-center">記事が存在しません</p>
			</div>
		);
	}

	return (
		<div className="mx-4 max-sm:py-4 flex flex-col gap-10">
			<h2>タグ：{tag.name}</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
				{target.map((post) => (
					<PostCard post={post} key={post.id} />
				))}
			</div>
		</div>
	);
}
