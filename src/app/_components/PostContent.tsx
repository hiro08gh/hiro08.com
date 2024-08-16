import { formatDate } from "@/libs/date";
import type { getPostDetail } from "@/libs/microcms";

type Props = {
	post: Awaited<ReturnType<typeof getPostDetail>>;
};

export const PostContent: React.FC<Props> = (props) => {
	const { post } = props;
	return (
		<div>
			<h2 className="text-2xl font-bold mb-1">{post.title}</h2>
			<div className="mb-4">{formatDate(post.createdAt)}</div>
			<div
				className="flex flex-col gap-8"
				dangerouslySetInnerHTML={{ __html: post.body }}
			/>
		</div>
	);
};
