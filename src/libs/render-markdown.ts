import marked from 'marked';

const renderer = new marked.Renderer();

renderer.link = (href, _, text) => `<a href=${href} target="_blank" rel="noopener noreferrer" class="link">${text}</a>`;

marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: true,
  renderer
});

export const renderMarkdown = (markdown) => {
  return marked(markdown);
};
