import React from 'react';
import styled from 'styled-components';
import { connectSearchBox } from 'react-instantsearch-dom';
import { SearchBoxProvided } from 'react-instantsearch-core';

export const Component: React.FC<SearchBoxProvided> = connectSearchBox(({ refine, currentRefinement, className }) => (
  <form className={className}>
    <input
      className="search-input"
      type="text"
      placeholder="キーワードを検索"
      aria-label="Search"
      onChange={(e) => refine(e.target.value)}
      value={currentRefinement}
    />
  </form>
));

export const SearchBox = styled(Component)``;
