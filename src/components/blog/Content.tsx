import React from 'react';
import styled from 'styled-components';
import { ContentStyle } from './ContentStyle';
import { renderMarkdown } from '../../libs/render-markdown';

type Props = {
  body: string;
};

const Wrapper = styled.div`
  margin-top: 48px;
`;

export const Content: React.FC<Props> = (props) => {
  const { body } = props;
  return (
    <Wrapper>
      <ContentStyle>
        <div
          dangerouslySetInnerHTML={{
            __html: `${renderMarkdown(`${body}`)}`
          }}
        ></div>
      </ContentStyle>
    </Wrapper>
  );
};
