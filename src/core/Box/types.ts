export type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
  width?: number;
  height?: number;
  flex?: boolean;
  fullWidth?: boolean;
  direction?: 'column' | 'row';
  justifyContent?: 'flex-start' | 'flex-end' | 'space-between' | 'center';
  alignItems?: 'flex-start' | 'flex-end' | 'space-between' | 'center';
  m?: number;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
  p?: number;
  pr?: number;
  pl?: number;
  pt?: number;
  pb?: number;
};
