import React from 'react';
import styled from 'styled-components';

type Props = {
  className: string;
  name: string;
  image: string;
  description: string;
};

const Component: React.FC<Props> = (props) => {
  const { className, name, image, description } = props;
  return (
    <div className={className}>
      <div className="flex">
        <div className="author__block">
          <img src={`${image}?w=124&h=124`} alt="ライターイメージ" className="author__img" />
        </div>
        <div>
          <h3 className="author__name">{name}</h3>
          <p className="author__description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const Author = styled(Component)`
  margin-top: 64px;

  .flex {
    display: flex;
  }

  .author__img {
    width: 144px;
    height: 144px;
    border-radius: 100%;
  }

  .author__block {
    margin-right: 24px;
  }

  .author__name {
    font-size 24px;
    margin-bottom: 0;
  }
`;
