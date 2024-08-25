import { formatDate } from "@/libs/date";
import { marked } from "@/libs/marked";
import type { PostDetailType } from "@/libs/microcms";
import { BookmarkIcon, UpdateIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { parser } from "rich-editor-to-markdown-parser";
import { Toc } from "./Toc";

type Props = {
	post: PostDetailType;
};

export const PostContent: React.FC<Props> = (props) => {
	const { post } = props;
	const tokens = marked.lexer(parser(post.body));
	const headingLevel = 5;
	const toc = tokens.filter(
		(token) => token.type === "heading" && token.depth < headingLevel,
	);

	return (
		<div className="mb-10">
			<h2 className="text-2xl font-bold mb-4">{post.title}</h2>
			<div className="mb-10 flex items-center flex-wrap gap-3">
				<div>{formatDate(post.createdAt)}</div>
				{formatDate(post.updatedAt) !== formatDate(post.createdAt) && (
					<div className="flex items-center gap-1">
						<UpdateIcon />
						{formatDate(post.updatedAt)}
					</div>
				)}
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
			{post.image && (
				<div className="mb-10">
					<img
						src={`${post.image.url}?w=${post.image.width}&h=${post.image.height}`}
						alt="サムネイルの画像"
						width={post.image.width}
						height={post.image.height}
					/>
				</div>
			)}
			{post.isTOC && (
				<>
					<Toc toc={toc} />
					<hr className="mb-10" />
				</>
			)}
			<div
				className="post flex flex-col gap-8"
				dangerouslySetInnerHTML={{
					__html: marked.parse(parser(post.body)),
				}}
			/>
		</div>
	);
};
