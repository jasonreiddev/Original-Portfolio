import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {FormField} from './FormField';

export default {
  title: 'FormField',
  component: FormField,
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => <FormField {...args} />;

export const Name = Template.bind({});
Name.args = {
  name: 'name',
  displayName: 'Enter Name:',
  type: 'string',
  value: '',
  updateValue: null,
};

export const Date = Template.bind({});
Date.args = {
  name: 'date',
  displayName: 'Enter Date:',
  type: 'string',
  value: '',
  updateValue: null,
};

export const Blank = Template.bind({});
Blank.args = {
  name: null,
  displayName: null,
  type: null,
  value: null,
  updateValue: null,
};
