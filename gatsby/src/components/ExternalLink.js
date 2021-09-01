import React from 'react';
import styled from 'styled-components';
import {AiOutlineLink} from 'react-icons/ai';

const ExternalLinkStyles = styled.a`
  white-space: nowrap;
`;

export default function ExternalLink({
  to,
  children,
}) {
  return (
    <ExternalLinkStyles href={to}>
      <AiOutlineLink/>{children}
    </ExternalLinkStyles>
  );
}
