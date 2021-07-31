import React from 'react';
import styled from 'styled-components';
import { ContentStyle } from './ContentStyle';
import { ShareButtons } from '../ShareButtons';
import { TableOfContents } from '../TableOfContents';
import { MicrocmsArticle } from '../../types/graphqlTypes';
import { renderMarkdown } from '../../libs/render-markdown';
import { renderToc } from '../../libs/render-toc';

type Props = {
  className?: string;
  microcmsArticle: MicrocmsArticle;
};

const Component: React.VFC<Props> = ({ className, microcmsArticle }) => {
  // generate toc data
  const toc = renderToc(microcmsArticle.body);

  return (
    <div className={className}>
      <TableOfContents toc={toc} />
      <div className="ArticleContainer">
        <h1 className="ArticleTitle">{microcmsArticle.title}</h1>
        <time>{microcmsArticle.publishedAt}</time>
        <ContentStyle>
          <div
            dangerouslySetInnerHTML={{
              __html: `${renderMarkdown(`${microcmsArticle.body}`)}`
            }}
          ></div>
        </ContentStyle>
        <ShareButtons path={microcmsArticle.articleId} title={microcmsArticle.title} />
      </div>
    </div>
  );
};

export const Article = styled(Component)`
  position: relative;
  .ArticleTitle {
    font-size: 36px;
  }
`;
