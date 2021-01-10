import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

type Props = {
  className: string;
  blog: any;
};

const Component: React.FC<Props> = (props) => (
  <div className={props.className}>
    {props.blog.edges.map(({ node }) => (
      <React.Fragment key={node.id}>
        <Link to={`/blog/${node.blogId}`}>
          <h2>{node.title}</h2>
          {node.description}
        </Link>
        <Link to={`/blog/category/${node.category.id}`}>{node.category.name}</Link>
      </React.Fragment>
    ))}
  </div>
);

export const BlogList = styled(Component)``;
