import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Home } from '../../src/containers/Home/Home';

const props = {
  articles: {},
  fetchArticles: jest.fn(),
};
const warper = shallow(<Home {...props} />);
describe('Home container', () => {
  it('should match the snapshot', () => {
    expect(toJson(warper)).toMatchSnapshot();
  });
});
