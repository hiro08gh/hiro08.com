import { formatDate } from "@/libs/date";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type Props = {
	post: {
		id: string;
		title: string;
		publishedAt: string;
		type: string;
		description?: string;
	};
};

export const PostCard: React.FC<Props> = (props) => {
	const { post } = props;
	return (
		<div className="bg-white rounded-lg py-6 pr-6">
			<div className="text-sm text-gray-500 mb-2">{formatDate(post.publishedAt)}</div>
			<h3 className="text-lg font-bold leading-tight mb-2">
				{post.type === "Article" ? (
					<Link href={`/posts/${post.id}`} className="no-underline hover:text-blue-600 transition-colors">
						{post.title}
					</Link>
				) : (
					<Link href={post.id} className="no-underline hover:text-blue-600 transition-colors flex items-start gap-2" target="__blank">
						<span className="flex-1">{post.title} - Zenn</span>
						<ExternalLinkIcon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
					</Link>
				)}
			</h3>
			{post.description && (
				<p className="text-sm text-gray-600 line-clamp-2">{post.description}</p>
			)}
		</div>
	);
};
