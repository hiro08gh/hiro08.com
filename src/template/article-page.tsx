import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MainLayout } from '../components/Layouts/MainLayout';
import { InnerWidth } from '../components/InnerWidth';

const ArticlePage: React.FC<PageProps>  = () => {
  return (
    <MainLayout>
      <InnerWidth>
        Page
      </InnerWidth>
    </MainLayout>
  );
};

export default ArticlePage;

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    allMicrocmsBlog(sort: { fields: [publishedAt], order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          blogId
          publishedAt
          title
          description
          category {
            id
            name
          }
        }
      }
    }
  }
`;
