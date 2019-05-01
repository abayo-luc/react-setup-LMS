import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../../src/components/Footer/Footer';

const jSonWarper = toJson(shallow(<Footer />));

describe('Footer Component', () => {
  test('should match the snapshot', () => {
    expect(jSonWarper).toMatchSnapshot();
  });
});
