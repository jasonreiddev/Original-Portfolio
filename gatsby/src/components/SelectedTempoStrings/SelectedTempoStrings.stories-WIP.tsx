import React from 'react';
import {SelectedTempoStrings} from './SelectedTempoStrings';

export default {
  title: 'SelectedTempoStrings',
  component: SelectedTempoStrings,
};

const Template = (args) => <SelectedTempoStrings {...args}/>;

export const Blank = Template.bind({});
Blank.args = {
  selected: null,
  removeTempoString: null,
};
