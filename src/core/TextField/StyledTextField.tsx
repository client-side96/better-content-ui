import styled from 'styled-components';
import { StyledTextFieldProps } from './types';

export const TextFieldLabel = styled.p<{ focused: boolean }>`
  position: absolute;
  transition: 0.2s all ease-in-out;
  user-select: none;
  pointer-events: none;
  ${({ focused, theme }) =>
    focused &&
    `
        transform: scale(0.75);
        left: 5px;
        top: -27px;
        color: ${theme.palette.primary};
        background: ${theme.palette.background};
        padding: 3px;
    `};

  ${({ focused, theme }) =>
    !focused &&
    `
        left: 10px;
        top: -4px;
        transition: '0.2s all ease-in-out';
        color: ${theme.palette.fade(theme.palette.text, 0.3)};
    `};
`;

export const TextFieldWrapper = styled.div<{ width: number }>`
  ${({ width }) => `
    width: ${width}px;
    position: relative;
`}
`;

export const StyledTextArea = styled.textarea<StyledTextFieldProps>`
  ${({ theme }) =>
    `
    width: 100%;
    border: 1px solid ${theme.palette.fade(theme.palette.text, 0.3)};
    color: ${theme.palette.text};
    padding: 10px 10px;
    font-size: 16px;
    border-radius: ${theme.numbers.borderRadius}px;
    white-space: pre-wrap;
    line-height: 1.2;

    &:focus {
    border: 2px solid ${theme.palette.fade(theme.palette.primary, 1)};
  }
`}
`;

const StyledTextField = styled.input<StyledTextFieldProps>`
  ${({ theme }) =>
    `
    width: 100%;
    border: 1px solid ${theme.palette.fade(theme.palette.text, 0.3)};
    color: ${theme.palette.text};
    padding: 10px 10px;
    font-size: 16px;
    border-radius: ${theme.numbers.borderRadius}px;

    &:focus {
    border: 2px solid ${theme.palette.fade(theme.palette.primary, 1)};
  }
`}
`;

export default StyledTextField;
