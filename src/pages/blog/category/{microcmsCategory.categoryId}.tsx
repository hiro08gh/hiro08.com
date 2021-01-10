import React from 'react';
import { graphql, Link } from 'gatsby';
import { MainLayout } from '../../../components/layouts/MainLayout';
import { Inner } from '../../../components/shared/Inner';
import { BlogList } from '../../../components/shared/BlogList';

const CategoryPage: React.FC = ({ data }) => {
  return (
    <MainLayout metaTitle={data.microcmsCategory.name}>
      <Inner>
        <h2>カテゴリー:{data.microcmsCategory.name}</h2>
        <BlogList blog={data.allMicrocmsBlog} />
      </Inner>
    </MainLayout>
  );
};

export default CategoryPage;

export const query = graphql`
  query($id: String!, $categoryId: String!) {
    allMicrocmsBlog(sort: { fields: [publishedAt], order: DESC }, filter: { category: { id: { eq: $categoryId } } }) {
      edges {
        node {
          id
          createdAt
          publishedAt
          title
          description
          blogId
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
