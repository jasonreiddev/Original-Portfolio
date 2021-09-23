import React from 'react';

import {ButtonStyles} from './Button.styles';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  children?: any;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  children,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <ButtonStyles
      type="button"
      className={[`${size}`, mode].join(' ')}
      style={{backgroundColor}}
      {...props}
    >
      {children}
    </ButtonStyles>
  );
};
