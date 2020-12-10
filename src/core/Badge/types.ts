import { IColor } from '../../theme/types';

export type BadgeProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onClick'
> & {
  color: IColor;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};
