import React, { useEffect } from 'react';
import Prism from 'prismjs';
import { MainLayout } from '../../components/Layouts/MainLayout';
import { InnerWidth } from '../../components/InnerWidth';
import { Article } from '../../components/Article';
import { Author } from '../../components/Author';
import { RelatedArticle } from '../../components/RelatedArticle';
import { useFetchDraft } from '../../libs/hooks/uesFetchDraft';

const ArticleDraftPage: React.VFC = () => {
  const { data, isLoading, isError } = useFetchDraft();

  useEffect(() => {
    Prism.highlightAll();
  });

  if (isLoading) return <div>ローディング</div>;

  if (isError) return <div>エラー</div>;

  return (
    <MainLayout>
      <InnerWidth>
        <Article microcmsArticle={data.article} />
        <Author
          name={data.article?.author?.name}
          description={data.article?.author?.description}
          image={data.article?.author?.image?.url}
        />
        <RelatedArticle relatedArticle={data.article?.relatedArticle} />
      </InnerWidth>
    </MainLayout>
  );
};

export default ArticleDraftPage;
