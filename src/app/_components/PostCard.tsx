import { formatDate } from "@/libs/date";
import type { getPosts } from "@/libs/microcms";
import Link from "next/link";

type ArrayElementType<T> = T extends (infer U)[] ? U : T;

type Props = {
	post: ArrayElementType<Awaited<ReturnType<typeof getPosts>>["contents"]>;
};

export const PostCard: React.FC<Props> = (props) => {
	const { post } = props;
	return (
		<div className="mb-10" key={post.id}>
			<Link href={`/posts/${post.id}`} className="no-underline">
				<h2 className="text-2xl font-bold mb-1">{post.title}</h2>
			</Link>
			<div className="mb-4">{formatDate(post.createdAt)}</div>
			<p>{post.description}</p>
		</div>
	);
};
