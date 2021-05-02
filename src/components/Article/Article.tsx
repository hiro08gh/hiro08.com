import React from 'react';
import styled from 'styled-components';
import { ContentStyle } from './ContentStyle';
import { ShareButtons } from '../ShareButtons';
import { MicrocmsArticle } from '../../types/graphqlTypes';
import { renderMarkdown } from '../../libs/render-markdown';

type Props = {
  className?: string;
  microcmsArticle: MicrocmsArticle;
};

const Component: React.VFC<Props> = ({ className, microcmsArticle }) => {
  return (
    <div className={className}>
      <h1>{microcmsArticle.title}</h1>
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
  );
};

export const Article = styled(Component)`
  h1 {
    font-size: 36px;
  }
`;
