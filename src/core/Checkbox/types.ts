export type CheckboxProps = Omit<
  React.HTMLAttributes<HTMLInputElement>,
  'onChange' | 'label'
> & {
  label: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
};

export type StyledCheckboxProps = Omit<CheckboxProps, 'label' | 'onChange'> & {
  onClick: () => void;
};
