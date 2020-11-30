import { ITheme } from './types';
import * as colors from '../helpers/colors';

const lightTheme: ITheme = {
  palette: {
    primary: colors.ultramarineLight,
    text: colors.blackRock,
    textLight: colors.white,
    background: colors.white,
    border: colors.blackRock,
    info: colors.melrose,
    success: colors.springGreen,
    warning: colors.candleLight,
    error: colors.outrageousOrange,
    fade: (hex: string, opacity: number): string => {
      const rgb = colors.convertHexToRGB(hex);
      return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
    },
  },
  numbers: {
    borderRadius: 5,
    spacing: (factor: number): number => factor * 6,
  },
};

export default lightTheme;
