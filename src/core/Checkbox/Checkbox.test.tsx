import { shallow } from 'enzyme';
import React from 'react';
import Checkbox from './Checkbox';
import StyledCheckbox from './StyledCheckbox';

describe('Checkbox', () => {
  it('Checked is changing onClick', () => {
    const onChangeMock = jest.fn();
    const wrapper = shallow(
      <Checkbox label="Test" onChange={onChangeMock} checked={false} />
    ).find(StyledCheckbox);
    wrapper.simulate('click');
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
