import React from 'react';
import StyledBadge from './StyledBadge';
import { BadgeProps } from './types';

const Badge: React.FC<BadgeProps> = ({ children, ...rest }) => {
  return <StyledBadge {...rest}>{children}</StyledBadge>;
};

export default Badge;
