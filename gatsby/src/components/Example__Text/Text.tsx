import React from 'react';
import styled from 'styled-components';

const TextStyles = styled.div`
  color: green;
`;

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
