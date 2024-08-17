import hljs from "highlight.js";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";

export const marked = new Marked(
	markedHighlight({
		langPrefix: "hljs language-",
		highlight(code, lang) {
			const language = hljs.getLanguage(lang) ? lang : "plaintext";
			return hljs.highlight(code, { language }).value;
		},
	}),
);

export const generateTOC = (body: string) => {
	const tokens = marked.lexer(body);
	const toc = tokens.filter(
		(token) => token.type === "heading" && token.depth < 5,
	);

	return toc;
};
