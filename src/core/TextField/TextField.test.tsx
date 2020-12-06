import React from 'react';
import { shallow } from 'enzyme';
import TextField from './TextField';
import StyledTextField, { TextFieldLabel } from './StyledTextField';

describe('Text Field', () => {
  it('Label is passed', () => {
    const wrapper = shallow(<TextField label="Test" />).find(TextFieldLabel);
    expect(wrapper.text()).toBe('Test');
  });

  it('Change Event is working', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <TextField label="Test" onChange={onChange} />
    ).find(StyledTextField);
    const mockChangeEvent = { target: { value: 'New' } };
    wrapper.simulate('change', mockChangeEvent);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('Blur Event is working', () => {
    const onBlur = jest.fn();
    const wrapper = shallow(<TextField label="Test" onBlur={onBlur} />).find(
      StyledTextField
    );
    const mockChangeEvent = { target: { value: 'New' } };
    wrapper.simulate('blur', mockChangeEvent);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
