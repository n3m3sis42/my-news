import React from 'react';
import Select from '../../Layout/Select/index';
import { shallow } from 'enzyme';

import Search from './index';

const props = {
  sources: [
    {
      id: 'abc-news',
      name: 'ABC News'
    },
    {
      id: 'cnn',
      name: 'CNN News'
    }
  ],
  onChange: jest.fn()
};

describe('Search', () => {
  it('renders without crashing', () => {
    shallow(<Search {...props}/>);
  });

  it('renders the <Select /> component', () => {
    const wrapper = shallow(<Search {...props}/>);
    expect(wrapper.find(Select)).toHaveLength(1);
  });
});
