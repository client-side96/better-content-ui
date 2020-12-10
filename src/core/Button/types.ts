import { IColor } from '../../theme/types';

export type ButtonProps = Omit<
  React.HTMLAttributes<HTMLAnchorElement>,
  'onClick' | 'label'
> & {
  label: string;
  color?: IColor;
  variant?: 'outlined' | 'filled';
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};
