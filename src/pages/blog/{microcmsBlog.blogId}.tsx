import React from 'react';
import { graphql, Link } from 'gatsby';
import { MainLayout } from '../../components/layouts/MainLayout';
import { MicrocmsBlog } from '../../graphqlTypes';

type Props = {
  data: {
    microcmsBlog: MicrocmsBlog;
  };
};

const BlogTemplate: React.FC<Props> = ({ data: { microcmsBlog } }) => {
  const blog = microcmsBlog;
  return <MainLayout>{blog.title}</MainLayout>;
};

export default BlogTemplate;

export const query = graphql`
  query($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      title
    }
  }
`;
