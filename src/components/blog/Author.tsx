import React from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
  image: string;
  description: string;
};

export const Author: React.FC<Props> = ({ name, image, description }) => {
  return (
    <Container>
      <Flex>
        <ImgBlock>
          <Img src={`${image}?w=124&h=124`} alt="ライターイメージ" />
        </ImgBlock>
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 64px;
`;

const Flex = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 144px;
  height: 144px;
  border-radius: 100%;
`;

const ImgBlock = styled.div`
  margin-right: 24px;
`;
