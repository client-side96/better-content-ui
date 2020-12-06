import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text, TextProps } from '../src';

const meta: Meta = {
  title: 'Core/Text',
  component: Text,
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

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({} as TextProps);
export const Heading1 = Template.bind({} as TextProps);
export const Heading2 = Template.bind({} as TextProps);
export const Heading3 = Template.bind({} as TextProps);
export const Heading4 = Template.bind({} as TextProps);
export const Heading5 = Template.bind({} as TextProps);
export const Heading6 = Template.bind({} as TextProps);
export const Body1 = Template.bind({} as TextProps);
export const Body2 = Template.bind({} as TextProps);
export const Caption = Template.bind({} as TextProps);

Default.args = {
  variant: 'h1',
  children: 'Better Content',
};

Heading1.args = {
  variant: 'h1',
  children: 'Heading 1',
};

Heading2.args = {
  variant: 'h2',
  children: 'Heading 2',
};

Heading3.args = {
  variant: 'h3',
  children: 'Heading 3',
};

Heading4.args = {
  variant: 'h4',
  children: 'Heading 4',
};

Heading5.args = {
  variant: 'h5',
  children: 'Heading 5',
};

Heading6.args = {
  variant: 'h6',
  children: 'Heading 6',
};

Body1.args = {
  variant: 'body1',
  children: 'Body 1',
};

Body2.args = {
  variant: 'body2',
  children: 'Body 2',
};

Caption.args = {
  variant: 'caption',
  children: 'Caption',
};
