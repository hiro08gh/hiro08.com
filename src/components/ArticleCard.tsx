import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { MicrocmsArticle } from '../types/graphqlTypes';

type Props = {
  className?: string;
  article: MicrocmsArticle[];
};

const Component: React.VFC<Props> = ({ className, article }) => {
  return (
    <div className={className}>
      {article?.map((article: MicrocmsArticle) => (
        <React.Fragment key={article.id}>
          <div className="ArticleCardWrapper">
            <Link to={`/article/${article.id}`}>
              <div className="ArticleCardRow">
                <figure className="ArticleCardFigure">
                  <img className="ArticleCardImage" src={article.thumbnail.url} alt="ブログイメージ" loading="lazy" />
                </figure>
                <div className="ArticleCardSection">
                  <div>
                    <time className="ArticleCardTime">{article.publishedAt}</time>
                  </div>
                  <h3 className="ArticleCardTitle">{article.title}</h3>
                  <p className="ArticleCardDescription">{article.description}</p>
                </div>
              </div>
            </Link>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export const ArticleCard = styled(Component)`
  width: 100%;
  margin-top: 48px;

  .ArticleCard {
    margin-bottom: 24px;
  }
  .ArticleCardRow {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      display: block;
    }
  }
  .ArticleCardFigure {
    width: 220px;
    flex: none;
  }
  .ArticleCardSection {
    flex: 1 1 0;
    margin: 0 0 0 40px;
    margin-top: 18px;
  }
  .ArticleCardTitle {
    font-size: 22px;
    margin-top: 0;
    margin-bottom: 0;
  }
  .ArticleCardTime {
    letter-spacing: 1px;
    font-size: 14px;
    margin-bottom: 8px;
  }
  .ArticleCardDescription {
    opacity: 0.8;
  }
  .ArticleCardImage {
    width: 100%;
    border-radius: 3px;
  }
`;
