import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {AiOutlineLeft} from 'react-icons/ai';
import {AiOutlineRight} from 'react-icons/ai';

const PaginationStyles = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  margin: 1rem 0 1rem 0;
  border-radius: 5px;
  text-align: center;
  & > * {
    font-weight: bold;
    font-size: 16pt;
    color: var(--sitePrimaryAccent);
    padding: 1rem;
    flex: 1;
    text-decoration: none;
    &[aria-current],
    &.current {
      color: var(--siteSecondary);
      cursor: default;
    }
    &[disabled] {
      pointer-events: none;
      color: var(--siteSecondary);
    }
  }
  @media (max-width: 800px) {
    .word {
      display: none;
    }
    font-size: 1.4rem;
  }
`;

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) {
  // make some variables
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
}
