import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Prism from 'prismjs';
import { MainLayout } from '../../components/layouts/MainLayout';
import { MicrocmsBlog } from '../../graphqlTypes';
import { Author } from '../../components/blog/Author';
import { Content } from '../../components/blog/Content';
import { Inner } from '../../components/shared/Inner';

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
        {blog.title}
        <Content body={blog.body} />
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
