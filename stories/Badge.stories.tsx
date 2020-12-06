import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Badge, BadgeProps, Box } from '../src';

const meta: Meta = {
  title: 'Core/Badge',
  component: Badge,
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

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({} as BadgeProps);

export const Showcase: Story<BadgeProps> = () => {
  return (
    <Box flex width={350} justifyContent="space-between" alignItems="center">
      <Badge color="primary">category</Badge>
      <Badge color="info">info</Badge>
      <Badge color="success" onClick={() => console.log('Badge click')}>
        online
      </Badge>
      <Badge color="warning">disconnected</Badge>
      <Badge color="error">not found</Badge>
    </Box>
  );
};

Default.args = {
  children: 'online',
  color: 'error',
};
