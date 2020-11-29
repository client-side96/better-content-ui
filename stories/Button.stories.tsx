import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src';

const meta: Meta = {
  title: 'Core/Button',
  component: Button,
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

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({} as ButtonProps);
export const Filled = Template.bind({} as ButtonProps);
export const Action = Template.bind({} as ButtonProps);

Default.args = {
  label: 'Button',
};

Filled.args = {
  label: 'Button',
  variant: 'filled',
};

Action.args = {
  label: 'Action',
  onClick: () => console.log('On Click'),
};
