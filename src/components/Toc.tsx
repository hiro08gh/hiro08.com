import type { Token } from "marked";

type Props = {
	toc: Token[];
};

export const Toc: React.FC<Props> = (props) => {
	return (
		<aside className="mb-10">
			<ul>
				<li className="list-none mb-2 font-bold">目次</li>
				{props.toc.map((value) => (
					<li className="list-none mb-2" key={value.raw}>
						{value.type === "heading" && (
							<a href={`#${value.text}`}>{value.text}</a>
						)}
					</li>
				))}
			</ul>
		</aside>
	);
};
