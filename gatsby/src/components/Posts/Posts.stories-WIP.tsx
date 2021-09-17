import React from 'react';
import {Posts} from './Posts';

export default {
  title: 'Posts',
  component: Posts,
};

const Template = (args) => <Posts {...args}/>;

export const Blank = Template.bind({});
Blank.args = {
  posts: null,
};

