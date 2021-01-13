import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

type Props = {
  className: string;
};

const Component: React.FC<Props> = (props) => (
  <footer className={props.className}>
    <div className="copy-right">
      <span>© 2021 hiro08.dev. All rights reserved.</span>
    </div>
  </footer>
);

export const Footer = styled(Component)`
  margin-top: 64px;
  margin-bottom: 64px;
  text-align: center;
`;
