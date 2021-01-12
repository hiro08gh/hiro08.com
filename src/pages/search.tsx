import React from 'react';
import { MainLayout } from 'components/layouts/MainLayout';
import { Inner } from 'components/shared/Inner';
import { Search } from 'components/shared/search/Search';

const searchIndices = [{ name: process.env.ALGOLIA_INDEX_NAME }];

const SearchPage = () => (
  <MainLayout metaTitle="検索">
    <Inner>
      <h2>検索</h2>
      <Search indices={searchIndices} />
    </Inner>
  </MainLayout>
);

export default SearchPage;
