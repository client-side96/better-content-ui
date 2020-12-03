import styled from 'styled-components';
import { TextProps } from './types';

const StyledText = styled.p<TextProps>`
  color: ${({ theme }) => theme.palette.text};
  margin: 0;
  ${({ variant }) =>
    variant === 'h1' &&
    `
    font-size: 48px;
    `};

  ${({ variant }) =>
    variant === 'h2' &&
    `
    font-size: 40px;
    `};

  ${({ variant }) =>
    variant === 'h3' &&
    `
    font-size: 32px;
    `};

  ${({ variant }) =>
    variant === 'h4' &&
    `
    font-size: 28px;
    `};

  ${({ variant }) =>
    variant === 'h5' &&
    `
    font-size: 24px;
    `};

  ${({ variant }) =>
    variant === 'h6' &&
    `
    font-size: 20px;
    text-transform: uppercase;
    `};

  ${({ variant }) =>
    variant === 'body1' &&
    `
    font-size: 16px;
    `};

  ${({ variant }) =>
    variant === 'body2' &&
    `
    font-size: 15px;
    `};

  ${({ variant }) =>
    variant === 'caption' &&
    `
    font-size: 13px;
    `};
`;
export default StyledText;
