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
      const normalizedHex = hex.substring(1);
      const red = parseInt(normalizedHex.substring(0, 2), 16);
      const green = parseInt(normalizedHex.substring(2, 4), 16);
      const blue = parseInt(normalizedHex.substring(4, 6), 16);
      return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    },
  },
  numbers: {
    borderRadius: 5,
    spacing: (factor: number): number => factor * 6,
  },
};

export default lightTheme;
