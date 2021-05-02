import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Component: React.FC<Props> = ({ className, children }) => <div className={className}>{children}</div>;

export const InnerWidth = styled(Component)`
  margin: 0 auto;
  padding: 0 16px;
  width: 820px;
  max-width: 100%;
`;
