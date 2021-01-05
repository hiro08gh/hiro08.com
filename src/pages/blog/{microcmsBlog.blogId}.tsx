import React from 'react';
import { graphql, Link } from 'gatsby';
import { MainLayout } from '../../components/layouts/MainLayout';
import { MicrocmsBlog } from '../../graphqlTypes';
import { Author } from '../../components/blog/Author';
import { Content } from '../../components/blog/Content';

type Props = {
  data: {
    microcmsBlog: MicrocmsBlog;
  };
};

const BlogPage: React.FC<Props> = ({ data: { microcmsBlog } }) => {
  const blog = microcmsBlog;
  return (
    <MainLayout>
      {blog.title}
      <Content body={blog.body} />
      <Author name={blog.author.name} description={blog.author.description} image={blog.author.image.url} />
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
