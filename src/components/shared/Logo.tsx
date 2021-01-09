import React, { memo } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

type Props = {
  className: string;
};

const Component = (props) => (
  <h1 className={props.className}>
    <Link to="/">hiro08.dev</Link>
  </h1>
);

export const Logo = styled(Component)`
  a {
    color: #33333;
    font-size: 18px;
  }
`;
