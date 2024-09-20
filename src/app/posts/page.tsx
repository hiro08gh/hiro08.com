import { PostCard } from "@/components/PostCard";
import { metadataConfig } from "@/libs/meta";
import { getPosts } from "@/libs/microcms";
import type { Metadata } from "next";

export const metadata: Metadata = metadataConfig({ title: "記事リスト" });

export default async function Page() {
	const posts = await getPosts(10);

	return (
		<div className="mx-4 max-sm:py-4 flex flex-col gap-12">
			<h2>記事リスト</h2>
			<div>
				{posts.contents.map((post) => (
					<PostCard post={post} key={post.id} />
				))}
			</div>
		</div>
	);
}
