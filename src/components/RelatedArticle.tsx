import React from 'react';
import styled from 'styled-components';
import { ArticleCard } from './ArticleCard';
import { MicrocmsArticle } from '../types/graphqlTypes';

type Props = {
  className?: string;
  relatedArticle: MicrocmsArticle[];
};

export const Component: React.VFC<Props> = ({ className, relatedArticle }) => {
  if (relatedArticle.length === 0) {
    return <div>関連記事がありません</div>;
  }
  return (
    <div className={className}>
      <div className="RelatedArticleHead">
        <h3>関連記事</h3>
      </div>
      <ArticleCard article={relatedArticle} />
    </div>
  );
};

export const RelatedArticle = styled(Component)`
  margin-top: 64px;
  .RelatedArticleHead {
    width: 100%;
  }
`;
