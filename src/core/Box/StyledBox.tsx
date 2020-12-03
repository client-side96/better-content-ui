import styled from 'styled-components';
import { BoxProps } from './types';

const StyledBox = styled.div<BoxProps>`
  ${({
    fullWidth,
    width,
    height,
    flex,
    direction,
    justifyContent,
    alignItems,
    p,
    pr,
    pl,
    pt,
    pb,
    m,
    mt,
    mb,
    mr,
    ml,
    theme,
  }) => `
    box-sizing: border-box;
    width: ${width ? `${width}px` : 'auto'};
    height: ${height ? `${height}px` : 'auto'};
    
    ${fullWidth && `width: 100%;`};

    ${
      flex &&
      `
        display: flex;
        justify-content: ${justifyContent || `flex-start`};
        align-items: ${alignItems || `flex-start`};
        flex-direction: ${direction || 'row'};
    `
    };

    padding: ${theme.numbers.spacing(p || 0)}px;
    ${
      !p &&
      `
        padding-top: ${theme.numbers.spacing(pt || 0)}px;
        padding-bottom: ${theme.numbers.spacing(pb || 0)}px;
        padding-left: ${theme.numbers.spacing(pl || 0)}px;
        padding-right: ${theme.numbers.spacing(pr || 0)}px;
    `
    };

    margin: ${theme.numbers.spacing(m || 0)}px;
    ${
      !m &&
      `
        margin-top: ${theme.numbers.spacing(mt || 0)}px;
        margin-bottom: ${theme.numbers.spacing(mb || 0)}px;
        margin-left: ${theme.numbers.spacing(ml || 0)}px;
        margin-right: ${theme.numbers.spacing(mr || 0)}px;
      `
    };
`}
`;

export default StyledBox;
