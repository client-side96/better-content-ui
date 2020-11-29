import * as React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import { ButtonProps } from './types';

const defaultProps: ButtonProps = {
  label: 'Label',
};

describe('Button', () => {
  it('Label is passed correctly', () => {
    const wrapper = shallow(<Button {...defaultProps} />);
    expect(wrapper.text()).toBe('Label');
  });
  it('Default is applied', () => {
    const wrapper = shallow(<Button {...defaultProps} />);
    const color = wrapper.prop('color');
    const variant = wrapper.prop('variant');
    expect(color).toBe('primary');
    expect(variant).toBe('outlined');
  });
  it('Variant is passed correctly', () => {
    const props: ButtonProps = {
      ...defaultProps,
      variant: 'filled',
    };
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.prop('variant')).toBe('filled');
  });
  it('Variant is passed correctly', () => {
    const props: ButtonProps = {
      ...defaultProps,
      color: 'success',
    };
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.prop('color')).toBe('success');
  });
  it('On click is working', () => {
    const clickFn = jest.fn();
    const props: ButtonProps = {
      ...defaultProps,
      onClick: clickFn,
    };
    const wrapper = shallow(<Button {...props} />);
    wrapper.simulate('click');
    expect(clickFn).toHaveBeenCalledTimes(1);
  });
});
