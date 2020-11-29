export interface IPalette {
  primary: string;
  text: string;
  textLight: string;
  background: string;
  border: string;
  info: string;
  success: string;
  warning: string;
  error: string;
  fade: (hex: string, opacity: number) => string;
}

export interface INumbers {
  borderRadius: number;
  spacing: (factor: number) => number;
}

export interface ITheme {
  palette: IPalette;
  numbers: INumbers;
}
