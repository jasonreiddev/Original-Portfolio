import React from 'react';

import {MainStyles} from './PaginatedPosts.styles';
import {Pagination} from '../Pagination/Pagination';
import {Posts} from '../Posts/Posts';

interface PaginatedPostsProps {
  posts?: any,
  pageSize?: number,
  totalCount?: number,
  currentPage?: number,
  base?: string
}

export const PaginatedPosts = ({posts, pageSize, totalCount, currentPage, base}:PaginatedPostsProps) => {
  return (
    <MainStyles>
      <Posts posts={posts}/>
      <Pagination
        pageSize={pageSize}
        totalCount={totalCount}
        currentPage={currentPage || 'All'}
        base={base}
      />
    </MainStyles>
  )
  ;
};
