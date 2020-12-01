export type TextFieldProps = {
  label: string;
  multiline?: boolean;
  name?: string;
  onBlur?: (event: React.FocusEvent<unknown>) => void;
  onFocus?: (event: React.FocusEvent<unknown>) => void;
  onChange?: (event: React.ChangeEvent<unknown>) => void;
  rows?: number;
  style?: React.CSSProperties;
  value?: string;
  width?: number;
};

export type StyledTextFieldProps = Omit<TextFieldProps, 'label'>;
