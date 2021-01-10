import React from 'react';
import { graphql, Link } from 'gatsby';

import { MainLayout } from '../components/layouts/MainLayout';
import { Inner } from '../components/shared/Inner';
import { Pagination } from '../components/shared/Pagination';
import { MicrocmsBlogConnection } from '../types/graphqlTypes';

type Props = {
  data: {
    allMicrocmsBlog: MicrocmsBlogConnection;
  };
};

const IndexPage: React.FC<Props> = ({ data }) => {
  const perPage = 10;
  const pageCount = Math.ceil(data.allMicrocmsBlog.totalCount / perPage);

  return (
    <MainLayout>
      <Inner>
        {data.allMicrocmsBlog.edges.map(({ node }) => (
          <React.Fragment key={node.id}>
            <Link to={`/blog/${node.blogId}`}>{node.title}</Link>
            <Link to={`/blog/category/${node.category.id}`}>{node.category.name}</Link>
          </React.Fragment>
        ))}
        <Pagination currentPage={1} pageCount={pageCount} path="blog" />
      </Inner>
    </MainLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMicrocmsBlog(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          blogId
          title
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
