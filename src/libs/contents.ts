import * as cheerio from 'cheerio';
import hljs from 'highlight.js';
import dayjs from 'dayjs';

export const PER_PAGE = 10;

export const range = (start: number, end: number) =>
  [...Array(end - start + 1)].map((_, i) => start + i);

export const parseBody = (body: string) => {
  const $ = cheerio.load(body);

  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return {
    __html: $.html(),
  };
};

export const parseDate = (time?: string) => {
  return dayjs(time).format('YYYY/MM/DD');
};

export type TableOfContentType = {
  id: string;
  text: string;
};

export const parseToc = (body: string): TableOfContentType[] => {
  const $ = cheerio.load(body);
  const headings = $('h1, h2, h3', 'h4').toArray();
  const toc = headings.map((data: any) => ({
    text: data.children[0].data,
    id: data.attribs.id,
  }));

  return toc;
};