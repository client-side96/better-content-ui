import styled from 'styled-components';
import { StyledCheckboxProps } from './types';

const StyledCheckbox = styled.div<StyledCheckboxProps>`
  ${({ theme, checked }) => `
	width: 25px;
	height: 25px;
	display: flex;
	alignItems: center;
	justify-content: center;
	border-radius: ${theme.numbers.borderRadius}px;
	border: 1px solid ${theme.palette.primary};
	margin-right: 15px;
	cursor: pointer;
	${
    checked &&
    `
		background: ${theme.palette.primary};
		`
  }
  transition: 0.2s background ease-in-out;
  &:hover {
    background: ${theme.palette.fade(
      theme.palette.primary,
      checked ? 0.85 : 0.15
    )};
  }

	`}
`;

export default StyledCheckbox;
