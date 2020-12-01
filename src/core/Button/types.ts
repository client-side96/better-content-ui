export type ButtonProps = {
  label: string;
  color?: 'primary' | 'info' | 'warning' | 'success' | 'error';
  variant?: 'outlined' | 'filled';
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  style?: React.CSSProperties;
};
