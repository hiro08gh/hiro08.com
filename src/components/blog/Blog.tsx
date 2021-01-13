import React from 'react';
import styled from 'styled-components';

import { Author } from './Author';
import { Content } from './Content';
import { RelatedBlog } from './RelatedBlog';
import { MicrocmsBlog } from 'types/graphqlTypes';
import { ShareButtons } from './ShareButtons';

import { formatDate } from 'libs/format-date';

type Props = {
  className: string;
  microcmsBlog: any;
};

const Component: React.FC<Props> = (props) => {
  const { className, microcmsBlog } = props;
  return (
    <div className={className}>
      <img className="blog__img" src={microcmsBlog.thumbnail.url} alt="サムネイル" />
      <h1>{microcmsBlog.title}</h1>
      <time>{formatDate(`${microcmsBlog.publishedAt}`)}</time>
      <Content body={microcmsBlog.body} />
      <ShareButtons path={microcmsBlog.blogId} title={microcmsBlog.title} />
      <Author name={microcmsBlog.author.name} description={microcmsBlog.author.description} image={microcmsBlog.author.image.url} />
      <RelatedBlog relatedBlog={microcmsBlog.relatedBlog} />
    </div>
  );
};

export const Blog = styled(Component)`
  .blog__img {
    width: 100%;
  }
`;
