import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {SEO} from './SEO';

export default {
  title: 'SEO',
  component: SEO,
} as ComponentMeta<typeof SEO>;

const Template: ComponentStory<typeof SEO> = (args) => <SEO {...args} />;

export const Blank = Template.bind({});
Blank.args = {
  title: null,
  subTitle: null,
  description: null,
  image: null,
  content: null,
};

