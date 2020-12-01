import React from 'react';
import StyledTextField, {
  StyledTextArea,
  TextFieldLabel,
  TextFieldWrapper,
} from './StyledTextField';
import { TextFieldProps } from './types';

const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    label,
    multiline = false,
    onFocus,
    onBlur,
    onChange,
    rows = 5,
    width = 200,
    value,
    ...rest
  } = props;
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const handleFocus = (event: React.FocusEvent<unknown>) => {
    const focusEvent = event as React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement
    >;
    setIsFocused(true);
    if (onFocus) onFocus(focusEvent);
  };

  const handleBlur = (event: React.FocusEvent<unknown>) => {
    const blurEvent = event as React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement
    >;
    if (!blurEvent.target.value) setIsFocused(false);
    if (onBlur) onBlur(blurEvent);
  };

  const handleChange = (event: React.ChangeEvent<unknown>) => {
    const changeEvent = event as React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >;
    if (onChange) onChange(changeEvent);
  };

  return (
    <TextFieldWrapper width={width}>
      <TextFieldLabel focused={isFocused}>{label}</TextFieldLabel>
      {!multiline && (
        <StyledTextField
          {...rest}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
        />
      )}
      {multiline && (
        <StyledTextArea
          {...rest}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          rows={rows}
          value={value}
        />
      )}
    </TextFieldWrapper>
  );
};

export default TextField;
