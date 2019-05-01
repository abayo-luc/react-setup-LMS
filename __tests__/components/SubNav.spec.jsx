import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SubNav from '../../src/components/NavBar/SubNav';

const jSonWarper = toJson(shallow(<SubNav />));

describe('SubNav Component', () => {
  test('should match the snapshot', () => {
    expect(jSonWarper).toMatchSnapshot();
  });
});
