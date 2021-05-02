import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import { SearchBox } from './SearchBox';
import { SearchResult } from './SearchResult';

type Props = {
  indices: { name: string }[];
};

export const Search: React.FC<Props> = (props) => {
  const [query, setQuery] = useState();
  const searchClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY);

  return (
    <div className="search">
      <InstantSearch searchClient={searchClient} indexName={props.indices[0].name} onSearchStateChange={({ query }) => setQuery(query)}>
        <SearchBox />
        <SearchResult indices={props.indices} />
      </InstantSearch>
    </div>
  );
};
