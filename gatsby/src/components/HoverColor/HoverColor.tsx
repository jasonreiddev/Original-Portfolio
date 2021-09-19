import React from 'react';
import {HoverColorStyles} from './HoverColor.styles';

interface HoverColorProps {
  children?: any,
  icon?: any,
  iconAlt?: string,
  date?: string,
}

export const HoverColor = ({children, icon, iconAlt, date}: HoverColorProps) => {
  const Icon = icon ? icon : null;
  return (
    <HoverColorStyles>
      {Icon && <Icon alt={iconAlt}/>}&nbsp;
      <span className="highlight">{children}</span>
      {date && <span> - {date}</span>}
    </HoverColorStyles>
  );
};

