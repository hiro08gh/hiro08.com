import React from 'react';
import { graphql, Link } from 'gatsby';

import { MainLayout } from 'components/layouts/MainLayout';
import { Inner } from 'components/shared/Inner';
import { Pagination } from 'components/shared/Pagination';
import { BlogList } from 'components/shared/BlogList';
import { MicrocmsBlogConnection } from 'types/graphqlTypes';
import { PerPage } from 'libs/constants';

type Props = {
  data: {
    allMicrocmsBlog: MicrocmsBlogConnection;
  };
};

const IndexPage: React.FC<Props> = ({ data }) => {
  const pageCount = Math.ceil(data.allMicrocmsBlog.totalCount / PerPage);

  return (
    <MainLayout>
      <Inner>
        <BlogList blog={data.allMicrocmsBlog} />
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
          description
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
