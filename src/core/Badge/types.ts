import { IColor } from '../../theme/types';

export type BadgeProps = {
  color: IColor;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};
