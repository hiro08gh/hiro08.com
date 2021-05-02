import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Component: React.VFC<Props> = ({ className }) => (
  <footer className={className}>
    <div className="CopyRight">
      <span>© 2021 hiro08.dev. All rights reserved.</span>
    </div>
  </footer>
);

export const Footer = styled(Component)`
  margin-top: 64px;
  margin-bottom: 64px;
  text-align: center;
`;
