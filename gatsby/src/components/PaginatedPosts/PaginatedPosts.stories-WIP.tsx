import React from 'react';
import {PaginatedPosts} from './PaginatedPosts';

export default {
  title: 'PaginatedPosts',
  component: PaginatedPosts,
};

const Template = (args) => <PaginatedPosts {...args}/>;

export const Blank = Template.bind({});
Blank.args = {
  posts: null,
  pageSize: null,
  totalCount: null,
  currentPage: null,
  base: null,
};
