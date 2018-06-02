import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Header from './components/Layout/Header/index';
import NewsSearch from './components/NewsSearch/index';
import Footer from './components/Layout/Footer/index';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders the <Header /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('renders the <NewsSearch /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(NewsSearch)).toHaveLength(1);
  });

  it('renders the <Footer /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
