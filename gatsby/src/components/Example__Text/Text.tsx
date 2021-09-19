import React from 'react';
import {TextStyles} from './Text.styles';

interface TextProps {
  text?: string,
}

export const Text = ({text}: TextProps) => {
  return (
    <TextStyles>
      Text: {text}
    </TextStyles>
  );
};

