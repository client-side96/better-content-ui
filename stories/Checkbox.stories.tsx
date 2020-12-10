import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from '../src';

const meta: Meta = {
  title: 'Core/Checkbox',
  component: Checkbox,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({} as CheckboxProps);

export const Interactive: Story<CheckboxProps> = () => {
  const [value, setIsValue] = React.useState<boolean>(false);
  const handleChange = (checked: boolean) => {
    setIsValue(checked);
  };
  return (
    <Checkbox
      label="Interactive Checkbox"
      onChange={handleChange}
      checked={value}
    />
  );
};

Default.args = {
  checked: false,
  label: 'Checkbox',
};
