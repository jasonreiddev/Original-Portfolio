import React from 'react';
import {TextStyles} from './Text.styles';

interface HeaderProps {
  text?: string,
}

export const Text = ({text}: HeaderProps) => {
  return (
    <TextStyles>
      Text: {text}
    </TextStyles>
  );
};

