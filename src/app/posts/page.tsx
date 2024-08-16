import { PostCard } from "@/app/_components/PostCard";
import { REVALIDATE_TIME } from "@/libs/constants";
import { getPosts } from "@/libs/microcms";

export const revalidate = REVALIDATE_TIME;

export default async function Page() {
	const posts = await getPosts();

	return (
		<div className="mx-4 max-sm:py-4">
			{posts.contents.map((post) => (
				<PostCard post={post} key={post.id} />
			))}
		</div>
	);
}
