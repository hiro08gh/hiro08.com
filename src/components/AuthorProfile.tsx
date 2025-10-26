import ReactMarkdown from "react-markdown";
import { parser } from "rich-editor-to-markdown-parser";
import type { AboutDetailType } from "@/libs/microcms";

type Props = {
	about: AboutDetailType;
};

export const AuthorProfile: React.FC<Props> = ({ about }) => {
	return (
		<div className="border-t border-gray-200 pt-8 mt-12">
			<h2 className="text-2xl font-bold mb-6">著者</h2>
			<div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
				{about.image ? (
					<img
						src={about.image.url}
						alt="hiro08gh"
						className="w-16 h-16 rounded-full flex-shrink-0 object-cover"
					/>
				) : (
					<div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
						<span className="text-gray-600 font-bold text-lg">H</span>
					</div>
				)}
				<div className="flex-1">
					<h3 className="text-xl font-bold mb-2">hiro08gh (Hiroki Ueda)</h3>
					<div className="text-gray-600 text-sm leading-relaxed">
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
								p(props) {
									return <p className="mb-2">{props.children}</p>;
								},
							}}
						>
							{parser(about.description)}
						</ReactMarkdown>
					</div>
				</div>
			</div>
		</div>
	);
};