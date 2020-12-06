import React from 'react';
import { shallow } from 'enzyme';
import Badge from './Badge';

describe('Badge', () => {
  it('Click functionality', () => {
    const clickMock = jest.fn();
    const wrapper = shallow(
      <Badge color="primary" onClick={clickMock}>
        test
      </Badge>
    );
    wrapper.simulate('click');
    expect(clickMock).toHaveBeenCalledTimes(1);
  });
});
