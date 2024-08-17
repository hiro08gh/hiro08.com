import hljs from "highlight.js";
import { Marked } from "marked";
import type { RendererObject } from "marked";
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

const renderer: RendererObject = {
	link({ tokens, href }) {
		const text = this.parser.parseInline(tokens);

		if (text === "embed-link") {
			return `<iframe src="https://embed-content.vercel.app/?url=${href}" title="" loading="lazy"></iframe>`;
		}

		return false;
	},
	heading({ tokens, depth }) {
		const text = this.parser.parseInline(tokens);

		return `<h${depth}>
              <a href="#${text}" name="${text}" class="no-underline">
              ${text}
              </a>
            </h${depth}>`;
	},
};

marked.use({ renderer });

export const generateTOC = (body: string) => {
	const tokens = marked.lexer(body);
	const toc = tokens.filter(
		(token) => token.type === "heading" && token.depth < 5,
	);

	return toc;
};
