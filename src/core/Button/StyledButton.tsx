import styled from 'styled-components';
import { checkContrast } from '../../helpers/colors';
import { ButtonProps } from './types';

const StyledButton = styled.a<ButtonProps>`
  cursor: pointer;
  user-select: none;
  padding: ${(props) => props.theme.numbers.spacing(1)}px
    ${(props) => props.theme.numbers.spacing(2)}px;
  margin: ${(props) => props.theme.numbers.spacing(1)}px;
  border-radius: ${(props) => props.theme.numbers.borderRadius}px;

  background-position: center;
  transition: 0.2s background ease-in-out;

  ${({ variant, theme, color }) =>
    color &&
    variant === 'outlined' &&
    `
  border: 1px solid ${theme.palette[color]};
  color: ${theme.palette[color]}};

  &:hover {
    background: ${theme.palette.fade(
      theme.palette[color],
      0.1
    )} radial-gradient(circle, transparent 1%, ${theme.palette.fade(
      theme.palette[color],
      0.1
    )} 1%) center/15000%;
  }

  &:active {
    background-color: ${theme.palette.fade(theme.palette[color], 0)};
    background-size: 100%;
    transition: background 0s;
  }

  ${
    !checkContrast(theme.palette.textLight, theme.palette[color]) &&
    console.warn(
      'The button has not the recommended color ratio. The text will be probably not readable.'
    )
  };
  `}

  ${({ variant, theme, color }) =>
    color &&
    variant === 'filled' &&
    `
  color: ${
    checkContrast(theme.palette.textLight, theme.palette[color])
      ? theme.palette.textLight
      : theme.palette.text
  };
  background:  ${theme.palette[color]}};

  &:hover {
    background: ${theme.palette.fade(
      theme.palette[color],
      0.8
    )} radial-gradient(circle, transparent 1%, ${theme.palette.fade(
      theme.palette[color],
      1
    )} 1%) center/15000%;
  }
  &:active {
    background-color: ${theme.palette.fade(theme.palette[color], 0.6)};
    background-size: 100%;
    transition: background 0s;
  }
`}
`;

export default StyledButton;
