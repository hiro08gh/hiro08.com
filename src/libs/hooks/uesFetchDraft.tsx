import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import queryString from 'query-string';

export const useFetchDraft = () => {
  const location = useLocation();
  const { id, draftKey } = queryString.parse(location.search);
  const url = process.env.API_URL + 'article/' + id + `?draftKey=${draftKey}`;

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(null);
  const [data, setData] = useState({
    article: {}
  });

  useEffect(() => {
    const key = {
      headers: { 'X-API-KEY': process.env.API_KEY }
    };
    const fetchDraftData = async () => {
      try {
        const res = await fetch(url, key);
        const data = await res.json();

        setData({
          article: data
        });
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    fetchDraftData();
  }, []);

  return {
    data,
    isLoading,
    isError
  };
};
