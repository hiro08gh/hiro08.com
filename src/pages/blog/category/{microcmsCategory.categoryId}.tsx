import React from 'react';
import { graphql, Link } from 'gatsby';
import { MainLayout } from '../../../components/layouts/MainLayout';
import { Inner } from '../../../components/shared/Inner';

const CategoryPage: React.FC = ({ data }) => {
  return (
    <MainLayout metaTitle={data.microcmsCategory.name}>
      <Inner>
        <h2>カテゴリー:{data.microcmsCategory.name}</h2>
        {data.allMicrocmsBlog.edges.map(({ node }) => (
          <React.Fragment key={node.id}>
            <Link to={`/blog/${node.blogId}`}>{node.title}</Link>
            <Link to={`/blog/category/${node.category.id}`}>{node.category.name}</Link>
          </React.Fragment>
        ))}
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
