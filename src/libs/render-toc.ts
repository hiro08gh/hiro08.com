import * as cheerio from 'cheerio';
import { renderMarkdown } from '../libs/render-markdown';

export interface TableOfContentType {
  id: string;
  text: string;
}

export const renderToc = (body: string): TableOfContentType[] => {
  const $ = cheerio.load(`${renderMarkdown(`${body}`)}`);
  const headings = $('h1, h2, h3').toArray();
  const toc = headings.map((data: any) => ({
    text: data.children[0].data,
    id: data.attribs.id
  }));

  return toc;
};
