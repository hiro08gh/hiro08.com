import React, { memo } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

type Props = {
  className: string;
};

const Component = (props) => (
  <h1 className={props.className}>
    <Link to="/">
      <div className="row">
        <img
          src="https://images.microcms-assets.io/protected/ap-northeast-1:2c74e029-93cb-43ad-9026-3e1fd330c060/service/jamzii-blog/media/39504660.png"
          alt="ロゴイメージ"
        />
        <span>hiro08.dev</span>
      </div>
    </Link>
  </h1>
);

export const Logo = styled(Component)`
  .row {
    display: flex;
    align-items: center;
  }
  a {
    color: #33333;
    font-size: 18px;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 8px;
  }
`;
