import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

export const Component: React.VFC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="IntroductionWrapper">
        <img
          className="IntroductionImage"
          src="https://images.microcms-assets.io/assets/f617a49708034423ad497c2f1b82df0f/fc16005567f74b3b905889395b4f687a/profile.jpg"
          alt="プロフィールイメージ"
        />
        <p className="IntroductionText">
          I am a Software engineer&nbsp;
          <a href="https://microcms.io/" className="IntroductionLink" target="_blank" rel="noopener">
            microcms
          </a>
          &nbsp;and happy hacking every time for learning something new.&nbsp; link:&nbsp;
          <a href="https://github.com/hiro08gh" className="IntroductionLink" target="_blank" rel="noopener">
            GitHub
          </a>
          &nbsp;
          <a href="https://twitter.com/hiro08gh" className="IntroductionLink" target="_blank" rel="noopener">
            Twitter
          </a>
        </p>
      </div>
    </div>
  );
};

export const Introduction = styled(Component)`
  .IntroductionWrapper {
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      display: block;
    }
  }
  .IntroductionImage {
    width: 64px;
    height: 64px;
    margin-right: 24px;
    border-radius: 100px;
  }
  .IntroductionText {
    font-size: 18px;
  }
  .IntroductionLink {
    font-size: 18px;
    color: #5185e4;
  }
`;
