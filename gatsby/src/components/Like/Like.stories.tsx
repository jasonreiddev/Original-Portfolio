import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Like} from './Like';

export default {
  title: 'Like',
  component: Like,
} as ComponentMeta<typeof Like>;

const Template: ComponentStory<typeof Like> = (args) => <Like {...args} />;

export const Liked = Template.bind({});
Liked.args = {
  likes: 1337,
  liked: true,
  updateData: null,
};

export const FirstLike = Template.bind({});
FirstLike.args = {
  likes: null,
  liked: false,
  updateData: null,
};

export const Blank = Template.bind({});
Blank.args = {
  likes: null,
  liked: null,
  updateData: null,
};
