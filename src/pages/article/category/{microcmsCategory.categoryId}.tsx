import React from 'react';
import { graphql } from 'gatsby';
import { MainLayout } from '../../../components/Layouts/MainLayout';
import { InnerWidth } from '../../../components/InnerWidth';
import { ArticleList } from '../../../components/ArticleList';
import { Introduction } from '../../../components/Introduction';
import { MicrocmsArticleConnection, MicrocmsCategory } from '../../../types/graphqlTypes';

type Props = {
  data: {
    allMicrocmsArticle: MicrocmsArticleConnection;
    microcmsCategory: MicrocmsCategory
  };
};

const CategoryPage: React.VFC<Props> = ({ data }) => {
  return (
    <MainLayout metaTitle={data.microcmsCategory.name}>
      <InnerWidth>
        <Introduction />
        <h2>カテゴリー:{data.microcmsCategory.name}</h2>
        <ArticleList article={data.allMicrocmsArticle} />
      </InnerWidth>
    </MainLayout>
  );
};

export default CategoryPage;

export const query = graphql`
  query($id: String!, $categoryId: String!) {
    allMicrocmsArticle(sort: { fields: [publishedAt], order: DESC }, filter: { category: { id: { eq: $categoryId } } }) {
      edges {
        node {
          id
          createdAt
          publishedAt(formatString: "YYYY年M月D日")
          title
          description
          articleId
          category {
            id
            name
          }
        }
      }
      totalCount
    }
    microcmsCategory(id: { eq: $id }) {
      name
    }
  }
`;
