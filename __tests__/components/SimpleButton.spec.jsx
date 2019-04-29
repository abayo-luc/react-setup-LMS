import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SimpleButton from '../../src/components/Buttons/SimpleButton';

const warper = shallow(<SimpleButton title="Submit" />);
describe('Simple Button', () => {
  test('should match the snapshot', () => {
    expect(toJson(warper)).toMatchSnapshot();
  });
});
