import React from 'react';
import { ButtonProps } from './types';
import StyledButton from './StyledButton';

const Button: React.FC<ButtonProps> = (props) => {
  const { label, color = 'primary', variant = 'outlined', ...rest } = props;
  return (
    <StyledButton {...rest} color={color} label={label} variant={variant}>
      {label}
    </StyledButton>
  );
};

export default Button;
