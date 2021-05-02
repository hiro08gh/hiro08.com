import React from 'react';
import { Link } from 'gatsby';
import { Highlight, Snippet } from 'react-instantsearch-dom';

type Props = {
  hit: {
    objectID: string;
    title: string;
    description: string;
  };
};

export const PageHit: React.FC<Props> = ({ hit }) => (
  <div>
    <Link to={`/article/${hit.objectID}`}>
      <h3>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h3>
    </Link>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
);
