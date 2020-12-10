export type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
};

export type StyledCheckboxProps = Omit<CheckboxProps, 'label' | 'onChange'> & {
  onClick: () => void;
};
