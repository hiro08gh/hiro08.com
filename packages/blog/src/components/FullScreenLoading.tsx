import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Component: React.VFC<Props> = ({ className }) => <div className={className}>Loading</div>;

export const FullScreenLoading = styled(Component)``;
