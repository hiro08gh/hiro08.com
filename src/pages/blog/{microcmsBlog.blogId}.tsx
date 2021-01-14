import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Prism from 'prismjs';
import { MainLayout } from 'components/layouts/MainLayout';
import { Inner } from 'components/shared/Inner';
import { MicrocmsBlog } from 'types/graphqlTypes';
import { Blog } from 'components/blog/Blog';

type Props = {
  data: {
    microcmsBlog: MicrocmsBlog;
  };
};

const BlogPage: React.FC<Props> = ({ data: { microcmsBlog } }) => {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <MainLayout metaTitle={microcmsBlog.title} metaDescription={microcmsBlog.description} metaImage={microcmsBlog.thumbnail.url}>
      <Inner>
        <Blog microcmsBlog={microcmsBlog} />
      </Inner>
    </MainLayout>
  );
};

export default BlogPage;

export const query = graphql`
  query($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      title
      body
      description
      publishedAt
      author {
        image {
          url
        }
        id
        description
        name
      }
      thumbnail {
        url
      }
      relatedBlog {
        id
        title
        description
        publishedAt
        thumbnail {
          url
        }
      }
    }
  }
`;
