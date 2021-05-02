import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { MicrocmsArticleConnection } from '../types/graphqlTypes';

type Props = {
  className?: string;
  article: MicrocmsArticleConnection;
};

const Component: React.VFC<Props> = ({ className, article}) => (
  <div className={className}>
    {article.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={`/article/${node.articleId}`}>
          <h2>{node.title}</h2>
        </Link>
        {node.publishedAt}
        <Link to={`/article/category/${node.category?.id}`}>{node.category?.name}</Link>
      </div>
    ))}
  </div>
);

export const ArticleList = styled(Component)`
  margin-top: 48px;
`;
