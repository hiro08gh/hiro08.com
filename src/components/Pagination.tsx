import React from 'react';
import { Link } from 'gatsby';

type Props = {
  pageCount: number;
};

export const Pagination: React.FC<Props> = ({ pageCount }) => {
  return (
    <nav>
      <ul>
        {Array.from({ length: pageCount }, (_, i) => (
          <React.Fragment key={i}>
            <li>
              <Link key={`pagination-number${i + 1}`} to={`${i === 0 ? '/' : i + 1}`} activeClassName="active">
                {i + 1}
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};
