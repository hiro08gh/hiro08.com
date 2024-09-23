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
		<div className="mb-4 flex items-center max-md:flex-none max-md:block max-md:mb-6">
			<div className="mr-4 max-md:mb-2">{formatDate(post.publishedAt)}</div>
			<h3 className="text-base font-bold">
				{post.type === "Article" ? (
					<Link href={`/posts/${post.id}`} className="no-underline">
						{post.title}
					</Link>
				) : (
					<Link href={post.id} className="no-underline" target="__blank">
						{post.title} - Zenn
					</Link>
				)}
			</h3>
		</div>
	);
};
