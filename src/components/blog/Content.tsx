import React from 'react';
import styled from 'styled-components';
import { renderMarkdown } from '../../libs/render-markdown';

const Wrapper = styled.div`
  margin-top: 48px;
`;

export const Content = ({ body }) => {
  return (
    <Wrapper>
      <div
        dangerouslySetInnerHTML={{
          __html: `${renderMarkdown(`${body}`)}`
        }}
      ></div>
    </Wrapper>
  );
};
