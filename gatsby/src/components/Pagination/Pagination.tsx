import React from 'react';
import {Link} from 'gatsby';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';

import {PaginationStyles} from './Pagination.styles';

type integer = number;
interface PaginationProps {
  pageSize?: integer,
  totalCount?: integer,
  currentPage?: integer,
  base?: integer,
};

export const Pagination = ({
  pageSize,
  totalCount,
  currentPage,
  base,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;
  return (
    <>
      {totalPages > 1 && currentPage != 'All' &&
        <PaginationStyles>
          <Link
            title="Prev Page"
            disabled={hasPrevPage}
            to={`${base}/${prevPage}`}
          >
            <AiOutlineLeft/><span className="word">Prev</span>
          </Link>
          {Array.from({length: totalPages}).map((_, i) => (
            <Link
              className={[currentPage === 1 && i === 0 ? 'current' : '', ' hide-small-mobile']}
              to={`${base}/${i + 1}`}
              key={`page${i}`}
            >
              {i + 1}
            </Link>
          ))}
          <Link
            title="Next Page"
            disabled={!hasNextPage}
            to={`${base}/${nextPage}`}
          >
            <span className="word">Next</span><AiOutlineRight/>
          </Link>
          <Link
            title="View All"
            to={`${base}`}
          >
            All
          </Link>
        </PaginationStyles>
      }
    </>
  );
};
