import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ExternalLink} from './ExternalLink';

export default {
  title: 'ExternalLink',
  component: ExternalLink,
} as ComponentMeta<typeof ExternalLink>;

const Template: ComponentStory<typeof ExternalLink> = (args) => <ExternalLink {...args} />;

export const Self = Template.bind({});
Self.args = {
  to: 'http://localhost:6006/?path=/story/externallink--self',
  children: 'This Story',
};

export const Story = Template.bind({});
Story.args = {
  to: 'http://localhost:6006/?path=/story/example-introduction--page',
  children: 'Welcome to Storybook',
};

export const Blank = Template.bind({});
Blank.args = {
  to: null,
  children: null,
};
