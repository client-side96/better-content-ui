import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextField, TextFieldProps } from '../src';

const meta: Meta = {
  title: 'Core/Text Field',
  component: TextField,
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

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({} as TextFieldProps);

export const OnChange: Story<TextFieldProps> = () => {
  const [value, setIsValue] = React.useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsValue(event.target.value);
  };
  return <TextField label="Name" onChange={handleChange} value={value} />;
};

Default.args = {
  label: 'Text Field',
};
