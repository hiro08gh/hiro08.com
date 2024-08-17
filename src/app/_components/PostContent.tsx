import { formatDate } from "@/libs/date";
import { marked } from "@/libs/marked";
import type { getPostDetail } from "@/libs/microcms";
import { SymbolIcon } from "@radix-ui/react-icons";
import { RichEditorToMarkdownParser } from "rich-editor-to-markdown-parser";

type Props = {
	post: Awaited<ReturnType<typeof getPostDetail>>;
};

export const PostContent: React.FC<Props> = (props) => {
	const { post } = props;

	return (
		<div className="mb-10">
			<h2 className="text-2xl font-bold mb-4">{post.title}</h2>
			<div className="mb-10 flex gap-3">
				<div>{formatDate(post.createdAt)}</div>
				{post.revisedAt && (
					<div className="flex items-center gap-1">
						<SymbolIcon />
						{formatDate(post.revisedAt)}
					</div>
				)}
			</div>
			<div
				className="post flex flex-col gap-8"
				dangerouslySetInnerHTML={{
					__html: marked.parse(RichEditorToMarkdownParser(post.body)),
				}}
			/>
		</div>
	);
};
