import type { PostDetailType } from "@/libs/microcms";
import ReactMarkdown from "react-markdown";
import { parser } from "rich-editor-to-markdown-parser";

type Props = {
	about: PostDetailType;
};

export const Top: React.FC<Props> = (props) => {
	return (
		<div className="mx-4 mb-8 max-sm:py-4">
			<div className="flex flex-col gap-8">
				<h2 className="text-3xl font-bold">hiro08gh (Hiroki Ueda) 🐶</h2>
				<ReactMarkdown
					components={{
						a(props) {
							const { node, ...rest } = props;
							return (
								<a href={rest.href} target="_blank" rel="noreferrer">
									{rest.children}
								</a>
							);
						},
					}}
				>
					{parser(props.about.body)}
				</ReactMarkdown>
			</div>
		</div>
	);
};
