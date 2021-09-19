import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {BiWorld} from 'react-icons/bi';

import {HoverColor} from './HoverColor';

export default {
  title: 'HoverColor',
  component: HoverColor,
} as ComponentMeta<typeof HoverColor>;

const Template: ComponentStory<typeof HoverColor> = (args) => <HoverColor {...args} />;

export const Hello = Template.bind({});
Hello.args = {
  children: 'Hello',
  icon: null,
  iconAlt: null,
  date: null,
};

export const World = Template.bind({});
World.args = {
  children: 'World - Logo & Date',
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
