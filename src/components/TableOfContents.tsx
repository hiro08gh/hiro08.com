import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

type TocType = {
  id: string;
  text: string;
};

type Props = {
  className?: string;
  toc: [];
  active?: boolean;
};

const Component: React.FC<Props> = ({ className, toc, active }) => {
  return (
    <div className={className}>
      <div className="TableOfContentsContainer">
        <p className="TableOfContentsHead">目次</p>
        <ul className="TableOfContentsLists">
          {toc.map((data: TocType) => (
            <li key={data.id} className={active ? 'active' : ''}>
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

  @media (max-width: 768px) {
    display: none;
  }

  .TableOfContentsHead {
    font-weight: 700;
  }

  .TableOfContentsContainer {
    position: sticky;
  }
`;
