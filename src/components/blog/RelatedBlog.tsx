import React from 'react';
import styled from 'styled-components';
import { BlogCard } from './BlogCard';

type Props = {
  className: string;
  relatedBlog: any;
};

export const Component: React.FC<Props> = (props) => {
  if (props.relatedBlog.length === 0) {
    return <div>関連記事がありません</div>;
  }
  return (
    <div className={props.className}>
      <div className="related__blog--head">
        <h3>関連記事</h3>
      </div>
      <BlogCard blog={props.relatedBlog} />
    </div>
  );
};

export const RelatedBlog = styled(Component)`
  margin-top: 64px;
  .related__blog--head {
    width: 100%;
  }
`;
