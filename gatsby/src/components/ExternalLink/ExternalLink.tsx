import React from 'react';
import {AiOutlineLink} from '@react-icons/all-files/ai/AiOutlineLink';

import {ExternalLinkStyles} from './ExternalLink.styles';

interface ExternalLinkProps {
  to?: any,
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
