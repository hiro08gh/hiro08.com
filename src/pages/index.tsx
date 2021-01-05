import React from 'react';
import { graphql, Link } from 'gatsby';

import { MainLayout } from '../components/layouts/MainLayout';
import { MicrocmsBlogConnection } from '../types/graphqlTypes';

type Props = {
  data: {
    allMicrocmsBlog: MicrocmsBlogConnection;
  };
};

const IndexPage: React.FC<Props> = ({ data }) => (
  <MainLayout>
    {data.allMicrocmsBlog.edges.map(({ node }) => (
      <React.Fragment key={node.id}>
        <Link to={`/blog/${node.blogId}`}>{node.title}</Link>
        <Link to={`/blog/category/${node.category.id}`}>{node.category.name}</Link>
      </React.Fragment>
    ))}
  </MainLayout>
);

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
    }
  }
`;
