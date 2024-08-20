import { Pagination } from "@/components/Pagination";
import { PostCard } from "@/components/PostCard";
import { getPosts } from "@/libs/microcms";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "記事リスト - hiro08gh",
};

export default async function Page() {
	const posts = await getPosts(10);

	return (
		<div className="mx-4 max-sm:py-4">
			{posts.contents.map((post) => (
				<PostCard post={post} key={post.id} />
			))}
			<Pagination totalCount={10} />
		</div>
	);
}
