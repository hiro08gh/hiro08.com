import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MainLayout } from '../components/Layouts/MainLayout';
import { InnerWidth } from '../components/InnerWidth';
import { ArticleList } from '../components/ArticleList';
import { Introduction } from '../components/Introduction';
import { MicrocmsArticleConnection } from '../types/graphqlTypes';

interface IndexPageProps extends PageProps {
  data: {
    allMicrocmsArticle: MicrocmsArticleConnection;
  };
};

const IndexPage: React.VFC<IndexPageProps> = ({ data }) => {
  return (
    <MainLayout>
      <InnerWidth>
        <Introduction />
        <ArticleList article={data.allMicrocmsArticle} />
      </InnerWidth>
    </MainLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMicrocmsArticle(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          articleId
          title
          description
          publishedAt(formatString: "YYYY年M月D日")
          category {
            id
            name
          }
        }
      }
      totalCount
    }
  }
`;
