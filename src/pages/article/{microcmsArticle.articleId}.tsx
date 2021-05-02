import React, { useEffect } from 'react';
import { graphql, PageProps } from 'gatsby';
import Prism from 'prismjs';
import { MainLayout } from '../../components/Layouts/MainLayout';
import { InnerWidth } from '../../components/InnerWidth';
import { MicrocmsArticle } from '../../types/graphqlTypes';
import { Article } from '../../components/Article';
import { Author } from '../../components/Author';
import { RelatedArticle } from '../../components/RelatedArticle';

interface ArticlePageProps extends PageProps {
  data: {
    microcmsArticle: MicrocmsArticle;
  };
};

const ArticlePage: React.VFC<ArticlePageProps> = ({ data: { microcmsArticle } }) => {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <MainLayout metaTitle={microcmsArticle.title} metaDescription={microcmsArticle.description} metaImage={microcmsArticle.thumbnail.url}>
      <InnerWidth>
        <Article microcmsArticle={microcmsArticle} />
        <Author name={microcmsArticle.author.name} description={microcmsArticle.author.description} image={microcmsArticle.author.image.url} />
        <RelatedArticle relatedArticle={microcmsArticle.relatedArticle} />
      </InnerWidth>
    </MainLayout>
  );
};

export default ArticlePage;

export const query = graphql`
  query($id: String!) {
    microcmsArticle(id: { eq: $id }) {
      articleId
      title
      body
      description
      publishedAt(formatString: "YYYY年M月D日")
      author {
        image {
          url
        }
        id
        description
        name
      }
      thumbnail {
        url
      }
      relatedArticle {
        id
        title
        description
        publishedAt(formatString: "YYYY年M月D日")
        thumbnail {
          url
        }
      }
    }
  }
`;
