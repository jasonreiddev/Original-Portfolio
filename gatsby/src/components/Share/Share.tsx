import React from 'react';
import {ShareStyles} from './Share.styles';
import {FaShare} from 'react-icons/fa';

interface ShareProps {
  text?: string,
  shareText?: string,
  shareUrl?: string,
}

export const Share = ({text, shareText, shareUrl}: ShareProps) => {
  return (
    <ShareStyles>
      <a title="Share via Twitter" href={`
          https://twitter.com/intent/tweet?text=${shareText}:&url=${shareUrl}`
      }>
        <FaShare/><br/>
        <span>{text}</span>
      </a>
    </ShareStyles>
  );
};

