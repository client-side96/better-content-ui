import styled from 'styled-components';
import { checkContrast } from '../../helpers/colors';
import { BadgeProps } from './types';

const StyledBadge = styled.div<BadgeProps>`
  ${({ color, theme, onClick }) => `
    display: inline-block;
    text-align: center;
    padding: ${theme.numbers.spacing(0.5)}px ${theme.numbers.spacing(1)}px;
    background: ${theme.palette[color]};
    font-size: 13px;
    border-radius: ${theme.numbers.borderRadius}px;
      color: ${
        checkContrast(theme.palette.textLight, theme.palette[color])
          ? theme.palette.textLight
          : theme.palette.text
      };

    ${
      onClick &&
      `
      cursor: pointer;
    `
    }
 `};
`;

export default StyledBadge;
