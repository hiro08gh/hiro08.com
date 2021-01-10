import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { formatDate } from '../../libs/format-date';

type Props = {
  blog: any;
};

export const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    <Container>
      {' '}
      {blog.map((blog: any) => (
        <React.Fragment key={blog.id}>
          <Article>
            <Link to={`/blog/${blog.id}`}>
              <Row>
                <Figure>
                  <Img src={blog.thumbnail.url} alt="ブログイメージ" loading="lazy" />
                </Figure>
                <Right>
                  <Flex>
                    <Time>{formatDate(`${blog.publishedAt}`)}</Time>
                  </Flex>
                  <H3>{blog.title}</H3>
                  <Description>{blog.description}</Description>
                </Right>
              </Row>
            </Link>
          </Article>
        </React.Fragment>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 48px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Time = styled.time`
  letter-spacing: 1px;
  font-size: 14px;
`;

const Category = styled.span`
  font-size: 14px;
  color: #fff;
  background-color: #333;
  padding: 8px 12px;
  border-radius: var(--br-base);
`;

const H3 = styled.h3`
  font-size: 24px;
`;

const Article = styled.article`
  margin-bottom: 24px;
`;

const Row = styled.div`
  display: flex;
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
  margin-top: 24px;
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

const LinkStyle = styled.a`
  color: #fff;
`;
