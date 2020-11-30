import React from 'react';
import StyledText from './StyledText';
import { TextProps } from './types';

const Text: React.FC<TextProps> = ({ variant, children }) => {
  return <StyledText variant={variant}>{children}</StyledText>;
};

export default Text;
