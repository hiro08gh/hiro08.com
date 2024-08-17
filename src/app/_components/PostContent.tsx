import { formatDate } from "@/libs/date";
import { marked } from "@/libs/marked";
import type { getPostDetail } from "@/libs/microcms";
import { RichEditorToMarkdownParser } from "rich-editor-to-markdown-parser";

type Props = {
	post: Awaited<ReturnType<typeof getPostDetail>>;
};

export const PostContent: React.FC<Props> = (props) => {
	const { post } = props;

	return (
		<div className="mb-10">
			<h2 className="text-2xl font-bold mb-4">{post.title}</h2>
			<div className="mb-10">{formatDate(post.createdAt)}</div>
			<div
				className="post flex flex-col gap-8"
				dangerouslySetInnerHTML={{
					__html: marked.parse(RichEditorToMarkdownParser(post.body)),
				}}
			/>
		</div>
	);
};
