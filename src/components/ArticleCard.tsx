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
      {article.map((article: any) => (
        <React.Fragment key={article.id}>
          <div className="ArticleCardWrapper">
            <Link to={`/article/${article.id}`}>
              <div className="ArticleCardRow">
                <Figure>
                  <Img src={article.thumbnail.url} alt="ブログイメージ" loading="lazy" />
                </Figure>
                <Right>
                  <Flex>
                    <Time>{article.publishedAt}</Time>
                  </Flex>
                  <H3>{article.title}</H3>
                  <Description>{article.description}</Description>
                </Right>
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
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Time = styled.time`
  letter-spacing: 1px;
  font-size: 14px;
  margin-bottom: 8px;
`;

const H3 = styled.h3`
  font-size: 22px;
  margin-top: 0;
  margin-bottom: 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const A = styled.a`
  display: flex;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 3px;
`;

const Figure = styled.figure`
  width: 220px;
  flex: none;
`;

const Right = styled.div`
  flex: 1 1 0;
  margin: 0 0 0 40px;
  margin-top: 18px;
}
`;

const CardFooter = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
`;

const Description = styled.p`
  opacity: 0.8;
`;
