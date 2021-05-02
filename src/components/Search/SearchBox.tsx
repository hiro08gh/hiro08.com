import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { SearchBoxProvided } from 'react-instantsearch-core';

export const SearchBox: React.VFC<SearchBoxProvided> = connectSearchBox(({ refine, currentRefinement }) => (
  <form>
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
