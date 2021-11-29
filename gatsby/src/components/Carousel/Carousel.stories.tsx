import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Carousel} from './Carousel';

export default {
  title: 'Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Button',
};

export const Blank = Template.bind({});
Blank.args = {
  size: null,
  children: null,
};
