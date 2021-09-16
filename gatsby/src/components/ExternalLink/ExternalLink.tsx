import React from 'react';
import styled from 'styled-components';
import {AiOutlineLink} from 'react-icons/ai';

const ExternalLinkStyles = styled.a`
  white-space: nowrap;
`;

interface ExternalLinkProps {
  to?: string,
  children?: any,
};

export const ExternalLink = ({
  to,
  children,
}: ExternalLinkProps) => {
  return (
    <ExternalLinkStyles href={to}>
      <AiOutlineLink/>{children}
    </ExternalLinkStyles>
  );
};
