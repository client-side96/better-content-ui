import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box, BoxProps, Text } from '../src';

const meta: Meta = {
  title: 'Core/Box',
  component: Box,
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

const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const Default = Template.bind({} as BoxProps);

export const Showcase: Story<BoxProps> = () => {
  return (
    <>
      <Box
        flex
        alignItems="center"
        justifyContent="center"
        style={{ background: '#ebebeb' }}
        m={2}
        p={1}
      >
        <Text variant="body1">Text</Text>
      </Box>
      <Box
        flex
        alignItems="flex-start"
        justifyContent="flex-start"
        style={{ background: '#ebebeb' }}
        m={2}
        p={1}
      >
        <Text variant="body1">Text</Text>
      </Box>
      <Box
        flex
        width={200}
        height={100}
        alignItems="center"
        justifyContent="space-between"
        style={{ background: '#ebebeb' }}
        m={2}
        p={1}
      >
        <Text variant="body1">Text1</Text>
        <Text variant="body1">Text2</Text>
      </Box>
      <Box
        fullWidth
        flex
        alignItems="center"
        justifyContent="space-between"
        style={{ background: '#ebebeb' }}
        m={2}
        p={1}
      >
        <Text variant="body1">Text1</Text>
        <Text variant="body1">Text2</Text>
      </Box>
    </>
  );
};

Default.args = {};
