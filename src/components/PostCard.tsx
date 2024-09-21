import { formatDate } from "@/libs/date";
import Link from "next/link";

type Props = {
	post: {
		id: string;
		title: string;
		publishedAt: string;
		type: string;
	};
};

export const PostCard: React.FC<Props> = (props) => {
	const { post } = props;
	return (
		<div className="mb-4 flex items-center">
			<div className="mr-4">{formatDate(post.publishedAt)}</div>
			<h2 className="text-base font-bold">
				{post.type === "Article" ? (
					<Link href={`/posts/${post.id}`} className="no-underline">
						{post.title}
					</Link>
				) : (
					<Link href={post.id} className="no-underline" target="__blank">
						{post.title} - Zenn
					</Link>
				)}
			</h2>
		</div>
	);
};
