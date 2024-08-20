import { formatDate } from "@/libs/date";
import type { PostContentsType } from "@/libs/microcms";
import { BookmarkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type Props = {
	post: PostContentsType;
};

export const PostCard: React.FC<Props> = (props) => {
	const { post } = props;
	return (
		<div className="mb-10" key={post.id}>
			<h2 className="text-2xl font-bold mb-2">
				<Link href={`/posts/${post.id}`} className="no-underline">
					{post.title}
				</Link>
			</h2>
			<div className="mb-10 flex items-center gap-3">
				<div>{formatDate(post.createdAt)}</div>
				<div className="flex gap-2">
					{post.tags.map((tag) => (
						<div key={tag.id} className="flex items-center">
							<Link
								href={`/posts/tags/${tag.id}`}
								className="flex items-center no-underline"
							>
								<BookmarkIcon />
								{tag.name}
							</Link>
						</div>
					))}
				</div>
			</div>
			<p>{post.description}</p>
		</div>
	);
};
