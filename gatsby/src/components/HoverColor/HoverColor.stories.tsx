import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {BiWorld} from '@react-icons/all-files/bi/BiWorld';

import {HoverColor} from './HoverColor';

export default {
  title: 'HoverColor',
  component: HoverColor,
} as ComponentMeta<typeof HoverColor>;

const Template: ComponentStory<typeof HoverColor> = (args) => <HoverColor {...args} />;

export const Hello = Template.bind({});
Hello.args = {
  children: <h2>Hello</h2>,
  icon: null,
  iconAlt: null,
  date: null,
};

export const World = Template.bind({});
World.args = {
  children: <h2>World - Logo & Date</h2>,
  icon: BiWorld,
  iconAlt: 'Logo',
  date: '12/01/2000',
};

export const Blank = Template.bind({});
Blank.args = {
  children: null,
  logo: null,
  logoAlt: null,
  date: null,
};
