import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Component: React.VFC<Props> = ({ className }) => (
  <header className={className}>
    <div className="HeaderInner">
      <div className="HeaderLogo">
        <Link to="/" className="HeaderLink">
          <span>hiro08.dev</span>
        </Link>
      </div>
    </div>
  </header>
);

export const Header = styled(Component)`
  background-color: #FFFFF;
  width: 100%;
  border-bottom: 1px solid #E4E4E4;
  margin-bottom: 24px;

  .HeaderInner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    max-width: 820px;
    margin: 0 auto;
    height: 64px;
  }
  .HeaderLogo {
    margin: 0;
  }
  .HeaderLink {
    color: #33333;
    font-size: 24px;
    font-weight: bold;
  }
`;
