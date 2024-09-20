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
		<div className="mb-4 flex" key={post.id}>
			<div className="mr-4">{formatDate(post.createdAt)}</div>
			<h2 className="text-base font-bold mb-2">
				<Link href={`/posts/${post.id}`} className="no-underline">
					{post.title}
				</Link>
			</h2>
		</div>
	);
};
