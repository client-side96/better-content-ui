import React from 'react';
import StyledCheckbox from './StyledCheckbox';
import { Box, Text } from '../..';
import { CheckboxProps } from './types';

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  onChange,
  checked,
  ...rest
}) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(checked);
  const handleClick = () => {
    if (onChange) onChange(!isChecked);
    setIsChecked(!isChecked);
  };
  return (
    <Box flex alignItems="center">
      <StyledCheckbox {...rest} onClick={handleClick} checked={checked}>
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29.767"
            height="27.994"
            viewBox="0 0 29.767 32.994"
          >
            <g
              id="Group_1"
              data-name="Group 1"
              transform="translate(-117.429 -259.468)"
            >
              <line
                id="Line_1"
                data-name="Line 1"
                x2="4.433"
                y2="4.433"
                transform="translate(124.5 275.958)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="5"
              />
              <line
                id="Line_2"
                data-name="Line 2"
                x1="11.231"
                y2="13.891"
                transform="translate(128.933 266.5)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="5"
              />
            </g>
          </svg>
        )}
      </StyledCheckbox>
      <Text variant="caption" style={{ userSelect: 'none' }}>
        {label}
      </Text>
    </Box>
  );
};

export default Checkbox;
