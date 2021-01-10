import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Prism from 'prismjs';
import { MainLayout } from '../../components/layouts/MainLayout';
import { Author } from '../../components/blog/Author';
import { Content } from '../../components/blog/Content';
import { Inner } from '../../components/shared/Inner';
import { MicrocmsBlog } from '../../graphqlTypes';
import { ShareButtons } from '../../components/blog/ShareButtons';
import { formatDate } from '../../libs/format-date';

type Props = {
  data: {
    microcmsBlog: MicrocmsBlog;
  };
};

const BlogPage: React.FC<Props> = ({ data: { microcmsBlog } }) => {
  const blog = microcmsBlog;
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <MainLayout metaTitle={blog.title} metaDescription={blog.description}>
      <Inner>
        <h1>{blog.title}</h1>
        <time>{formatDate(`${blog.publishedAt}`)}</time>
        <Content body={blog.body} />
        <ShareButtons path={blog.blogId} title={blog.title} />
        <Author name={blog.author.name} description={blog.author.description} image={blog.author.image.url} />
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
    }
  }
`;
