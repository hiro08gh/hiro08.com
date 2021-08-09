import React from 'react';
import styled from 'styled-components';
import { TableOfContentType } from '../libs/render-toc';

type Props = {
  className?: string;
  toc: [];
};

const Component: React.FC<Props> = ({ className, toc }) => {
  return (
    <div className={className}>
      <div className="TableOfContentsContainer">
        <p className="TableOfContentsHead">目次</p>
        <ul className="TableOfContentsLists">
          {toc.map((data: TableOfContentType) => (
            <li key={data.id}>
              <a href={`#${data.text}`} className="TableOfContentsLink">
                {data.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const TableOfContents = styled(Component)`
  position: absolute;
  left: -170px;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }

  .TableOfContentsContainer {
    position: sticky;
    top: 64px;
  }

  .TableOfContentsLists {
  }

  .TableOfContentsHead {
    font-weight: 700;
  }

  .active a {
    font-weight: 700;
  }
`;
