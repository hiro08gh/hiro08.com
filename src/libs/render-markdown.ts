import marked from 'marked';
import Prism from 'prismjs';

const renderer = new marked.Renderer();

renderer.link = (href, _, text) => `<a href=${href} target="_blank" rel="noopener noreferrer" class="link">${text}</a>`;

marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: true,
  renderer,
  highlight: (code: string, language: string) => {
    return Prism.highlight(code, Prism.languages[language]);
  }
});

export const renderMarkdown = (markdown: string) => {
  return marked(markdown);
};
