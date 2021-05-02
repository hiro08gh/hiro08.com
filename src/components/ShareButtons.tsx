import React from 'react';
import styled from 'styled-components';
import { FacebookShareButton, HatenaShareButton, TwitterShareButton, FacebookIcon, HatenaIcon, TwitterIcon } from 'react-share';

type Props = {
  className?: string;
  path: string;
  title?: string;
};

const Component: React.FC<Props> = ({ className, path, title }) => (
  <div className={className}>
    <div className="ShareButtons">
      <TwitterShareButton url={`https://hiro08.dev/blog/${path}`} title={`${title}`} className="Button">
        <TwitterIcon size={42} round={true} />
      </TwitterShareButton>
      <FacebookShareButton url={`https://hiro08.dev/blog/${path}`} title={`${title}`} className="Button">
        <FacebookIcon size={42} round={true} />
      </FacebookShareButton>
      <HatenaShareButton url={`https://hiro08.dev/blog/${path}`} title={`${title}`} className="Button">
        <HatenaIcon size={42} round={true} />
      </HatenaShareButton>
    </div>
  </div>
);

export const ShareButtons = styled(Component)`
  display: flex;
  align-items: center;
  margin-top: 48px;
  padding-top: 16px;

  .ShareButtons {
    margin-top: 16px;
    margin-left: 16px;
  }
  .Button {
    margin-right: 12px;
  }
`;
