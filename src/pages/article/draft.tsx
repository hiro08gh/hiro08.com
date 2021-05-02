import React, { useState, useEffect } from 'react';
import { PageProps } from 'gatsby';
import Prism from 'prismjs';
import { MainLayout } from '../../components/Layouts/MainLayout';
import { InnerWidth } from '../../components/InnerWidth';
import { useLocation } from '@reach/router';
import queryString from 'query-string';


const ArticleDraftPage: React.VFC<PageProps> = () => {
   const [data, setData] = useState({
    article: {},
  });
  const [error, setError] = useState(false);
  const location = useLocation();
  const { id, draftKey } = queryString.parse(location.search);

  const url =
    process.env.API_URL + 'article/' + id + `?draftKey=${draftKey}`;

  useEffect(() => {
     const key = {
      headers: { 'X-API-KEY': process.env.API_KEY },
    };
    const fetchDraftData = async () => {
      try {
        const res = await fetch(url, key);
        const data = await res.json();

        setData({
          article: data,
        });
      } catch (err) {
        console.log(err)
        setError(true);
      }
    };
    fetchDraftData();
    Prism.highlightAll();
  }, []);

  return (
    <MainLayout>
      <InnerWidth>
        {data.article.title}
      </InnerWidth>
    </MainLayout>
  );
};

export default ArticleDraftPage;