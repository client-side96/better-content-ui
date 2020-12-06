import { IColor } from '../../theme/types';

export type ButtonProps = {
  label: string;
  color?: IColor;
  variant?: 'outlined' | 'filled';
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  style?: React.CSSProperties;
};
