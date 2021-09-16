import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Text} from './Text';

export default {
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Hello = Template.bind({});
Hello.args = {
  text: 'Hello',
};

export const World = Template.bind({});
World.args = {
  text: 'World',
};

export const Blank = Template.bind({});
Blank.args = {
  text: null,
};
