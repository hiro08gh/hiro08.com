import React from 'react';
import styled from 'styled-components';
import { Hits, Index } from 'react-instantsearch-dom';
import { PageHit } from './PageHit';

type Props = {
  className: string;
  indices: [];
};

const Component: React.FC<Props> = ({ indices, className }) => (
  <div className={className}>
    {indices.map((index) => (
      <Index indexName={index.name}>
        <Hits className="Hits" hitComponent={PageHit} />
      </Index>
    ))}
  </div>
);

export const SearchResult = styled(Component)``;
