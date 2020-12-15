import React from 'react';
import StyledText from './StyledText';
import { TextProps } from './types';

const Text: React.FC<TextProps> = ({ variant, children, style, ...rest }) => {
  return (
    <StyledText {...rest} variant={variant} style={style}>
      {children}
    </StyledText>
  );
};

export default Text;
