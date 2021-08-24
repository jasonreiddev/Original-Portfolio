import React from 'react';
import {AiOutlineLink} from 'react-icons/ai';

export default function ExternalLink({
  to,
  children,
}) {
  return (
    <a href={to}>
      <AiOutlineLink/>{children}
    </a>
  );
}
