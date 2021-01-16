import React from 'react';
import styled from 'styled-components';
import { FacebookShareButton, HatenaShareButton, TwitterShareButton, FacebookIcon, HatenaIcon, TwitterIcon } from 'react-share';

type Props = {
  className: string;
  path: string;
  title?: string;
};

const Component: React.FC<Props> = (props) => (
  <div className={props.className}>
    <div className="share-buttons">
      <TwitterShareButton url={`https://hiro08.dev/blog/${props.path}`} title={`${props.title}`} className="btn">
        <TwitterIcon size={42} round={true} />
      </TwitterShareButton>
      <FacebookShareButton url={`https://hiro08.dev/blog/${props.path}`} title={`${props.title}`} className="btn">
        <FacebookIcon size={42} round={true} />
      </FacebookShareButton>
      <HatenaShareButton url={`https://hiro08.dev/blog/${props.path}`} title={`${props.title}`} className="btn">
        <HatenaIcon size={42} round={true} />
      </HatenaShareButton>
    </div>
    <span className="share__text">👈 この記事をシェアする</span>
  </div>
);

export const ShareButtons = styled(Component)`
  display: flex;
  align-items: center;
  margin-top: 48px;
  padding-top: 16px;
  .share-buttons {
    margin-top: 16px;
    margin-right: 16px;
  }
  .share__text {
    font-size: 20px;
    margin-top: 8px;
  }
  .btn {
    margin-right: 12px;
  }
`;
