import React from 'react';
import { Link } from 'gatsby';

type Props = {
  currentPage: number;
  pageCount: number;
  path: string;
};

export const Pagination: React.FC<Props> = ({ currentPage, pageCount, path }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === pageCount;
  const prevPage = currentPage - 1 === 1 ? '/1' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  return (
    <nav>
      <ul>
        {Array.from({ length: pageCount }, (_, i) => (
          <React.Fragment key={i}>
            <li>
              <Link key={`pagination-number${i + 1}`} to={`/${path}/page/${i === 0 ? '' : i + 1}`} activeClassName="active">
                {i + 1}
              </Link>
            </li>
          </React.Fragment>
        ))}
        <li>
          <Link to={`/blog/page/${nextPage}`}>次へ</Link>
        </li>
      </ul>
    </nav>
  );
};
