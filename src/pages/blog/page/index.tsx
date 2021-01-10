import React from 'react';
import { graphql } from 'gatsby';
import { MainLayout } from '../../../components/layouts/MainLayout';
import { Pagination } from '../../../components/shared/Pagination';
import { Inner } from '../../../components/shared/Inner';

const BlogPage: React.FC = ({ data: { allMicrocmsBlog }, pageContext }) => {
  const { currentPage, pageCount } = pageContext;

  return (
    <MainLayout metaTitle={currentPage === 1 ? 'ブログ' : `${pageCount}ページ目`}>
      <Inner>
        {currentPage === 1 ? null : <h3 className="mb-4">{currentPage}ページ目</h3>}
        <Pagination currentPage={currentPage} pageCount={pageCount} path="blog" />
      </Inner>
    </MainLayout>
  );
};

export default BlogPage;

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
