import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Logo } from './Logo';

type Props = {
  className: string;
};

const Component: React.FC<Props> = (props) => (
  <header className={props.className}>
    <div className="header__inner">
      <Logo />
      <Link to="/search">検索</Link>
    </div>
  </header>
);

export const Header = styled(Component)`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: #fff;

  .header__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    max-width: 1080px;
    margin: 0 auto;
    height: 84px;
  }
`;
