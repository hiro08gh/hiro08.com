import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  name: string;
  description: string;
  image: string;
};

const Component: React.VFC<Props> = ({ className, name, description, image }) => {
  return (
    <div className={className}>
      <div className="AuthorRow">
        <div className="AuthorSection">
          <img src={`${image}?w=124&h=124`} alt="プロフィールイメージ" className="AuthorImage" />
        </div>
        <div>
          <h3 className="AuthorName">{name}</h3>
          <p className="AuthorDescription">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const Author = styled(Component)`
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid #e1e1e1;

  .AuthorRow {
    display: flex;
    @media (max-width: 768px) {
      display: block;
    }
  }
  .AuthorSection {
    margin-right: 24px;
  }
  .AuthorImage {
    width: 144px;
    height: 144px;
    border-radius: 100%;
  }
  .ProfileName {
    font-size 24px;
    margin-bottom: 0;
  }
`;
