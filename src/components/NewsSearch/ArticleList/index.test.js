import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { shallow } from 'enzyme';

import ArticleList from './index';

const props = {
  articles: [
    {
      title: 'Dinosaur skeleton discovered underneath local playground',
      publishedAt: '2018-06-01T23:00:00',
      url: 'http://www.someurl.com'
    },
    {
      title: 'Heroic dog saves owner from house fire',
      publishedAt: '2018-05-31T23:00:01',
      url: 'http://www.anotherurl.com'
    },
  ]
};

describe('ArticleList', () => {
  it('renders without crashing', () => {
    shallow(<ArticleList {...props}/>);
  });

  it('renders the <BootstrapTable /> component if articles are found', () => {
    const wrapper = shallow(<ArticleList {...props}/>);
    expect(wrapper.find(BootstrapTable)).toHaveLength(1);
  });

  it('displays the correct message if no articles are found', () => {
    // const articles = [];
    const wrapper = shallow(<ArticleList />);
    expect(wrapper.html()).toEqual('<div>No articles found</div>');
    // console.log(wrapper.html());
  });
});
