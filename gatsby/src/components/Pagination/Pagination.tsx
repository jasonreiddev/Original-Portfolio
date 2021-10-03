import React from 'react';
import {Link} from 'gatsby';
import {AiOutlineLeft} from '@react-icons/all-files/ai/AiOutlineLeft';
import {AiOutlineRight} from '@react-icons/all-files/ai/AiOutlineRight';

import {PaginationStyles} from './Pagination.styles';

interface PaginationProps {
  pageSize?: number,
  totalCount?: number,
  currentPage?: any,
  base?: string,
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
            disabled={!hasPrevPage}
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
