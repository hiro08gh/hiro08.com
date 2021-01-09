import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Logo } from './Logo';

type Props = {
  className: string;
};

const Component = (props) => (
  <header className={props.className}>
    <div className="header__inner">
      <Logo />
    </div>
  </header>
);

export const Header = styled(Component)`
  width: 100%;

  .header__inner {
    padding: 0 16px;
    max-width: 1280px;
    margin: 0 auto;
  }
`;
