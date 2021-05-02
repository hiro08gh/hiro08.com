import React from 'react';
import { MainLayout } from '../components/Layouts/MainLayout';
import { InnerWidth } from '../components/InnerWidth';
import { Introduction } from '../components/Introduction';
import { Search } from '../components/Search';

const searchIndices = [{ name: process.env.ALGOLIA_INDEX_NAME }];

const SearchPage: React.VFC = () => (
  <MainLayout metaTitle="検索">
    <InnerWidth>
      <Introduction />
      <Search indices={searchIndices} />
    </InnerWidth>
  </MainLayout>
);

export default SearchPage;
