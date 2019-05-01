import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavBar from '../../src/components/NavBar/NavBar';

const jSonWarper = toJson(shallow(<NavBar />));

describe('NavBar Component', () => {
  test('should match the snapshot', () => {
    expect(jSonWarper).toMatchSnapshot();
  });
});
