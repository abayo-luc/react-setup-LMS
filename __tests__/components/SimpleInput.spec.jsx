import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import SimpleInput from '../../src/components/TextInputs/SimpleInput';

const props = {
  type: 'text',
  label: 'Something',
  name: 'something',
  value: 'hello world',
  placeholder: 'Something',
  onChange: jest.fn(),
};
const warper = shallow(<SimpleInput {...props} />);
describe('Simple Input', () => {
  test('should match the snapshot', () => {
    expect(toJson(warper)).toMatchSnapshot();
  });
});
