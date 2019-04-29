import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from '../../src/containers/Home/Home';

describe('Home container', () => {
  it('should match the snapshot', () => {
    const home = shallow(<Home />);
    expect(toJson(home)).toMatchSnapshot();
  });
});
