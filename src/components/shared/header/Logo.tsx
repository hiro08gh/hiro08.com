import React, { memo } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

type Props = {
  className: string;
};

const Component = (props) => (
  <div className={props.className}>
    <h1 className="logo__text">
      <Link to="/" className="logo__link">
        <div className="row">
          <img
            className="logo__img"
            src="https://images.microcms-assets.io/protected/ap-northeast-1:2c74e029-93cb-43ad-9026-3e1fd330c060/service/jamzii-blog/media/39504660.png"
            alt="ロゴイメージ"
          />
          <span>hiro08.dev</span>
        </div>
      </Link>
    </h1>
  </div>
);

export const Logo = styled(Component)`
  .logo__text {
    margin: 0;
  }
  .row {
    display: flex;
    align-items: center;
  }
  .logo__link {
    color: #33333;
    font-size: 18px;
  }
  .logo__img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 8px;
  }
`;
