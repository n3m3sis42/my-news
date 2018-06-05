import React from 'react';
import { shallow } from 'enzyme';

import NewsSearch from './index';
import Select from '../Layout/Select/index';
import ArticleList from './ArticleList/index';

describe('NewsSearch', () => {
  const sources = [
    {
      id: 'abc-news',
      name: 'ABC News'
    },
    {
      id: 'cnn',
      name: 'CNN News'
    }
  ];

  it('renders without crashing', () => {
    const wrapper = shallow(<NewsSearch />);
  });

  it('renders the <Select /> component', () => {
    const wrapper = shallow(<NewsSearch />);
    expect(wrapper.find(Select)).toHaveLength(1);
  });

  it('renders the <ArticleList /> component', () => {
    const wrapper = shallow(<NewsSearch />);
    expect(wrapper.find(ArticleList)).toHaveLength(1);
  });
});
