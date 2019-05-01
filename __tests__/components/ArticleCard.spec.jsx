import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ArticleCard from '../../src/components/Card/ArticleCard';

const warper = shallow(<ArticleCard />);
describe('Article Card Component', () => {
  test('should match the snapshots', () => {
    expect(toJson(warper)).toMatchSnapshot();
  });
});
