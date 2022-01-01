import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import queryString from 'query-string';

export const useFetchDraft = () => {
  const location = useLocation();
  const { id, draftKey } = queryString.parse(location.search);
  const baseUrl = process.env.API_URL;

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(null);
  const [data, setData] = useState({
    article: {}
  });

  useEffect(() => {
    const fetchDraftData = async () => {
      try {
        const res = await fetch(`${baseUrl}/article/${id}?draftKey=${draftKey}`, {
          headers: { 'X-API-KEY': process.env.API_KEY || '' }
        });
        const data = await res.json();

        setData({
          article: data
        });
        setLoading(false);
      } catch (err: any) {
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
