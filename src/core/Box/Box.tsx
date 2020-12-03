import React from 'react';
import StyledBox from './StyledBox';
import { BoxProps } from './types';

const Box: React.FC<BoxProps> = ({ children, ...rest }) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};

export default Box;
