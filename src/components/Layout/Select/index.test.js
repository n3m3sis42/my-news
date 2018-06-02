import React from 'react';
import { shallow } from 'enzyme';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import Select from './index';

const props = {
  options: [
    {
      value: 'abc-news',
      text: 'ABC News'
    },
    {
      value: 'cnn',
      text: 'CNN News'
    }
  ],
  onChange: jest.fn()
};

describe('Select', () => {
  it('renders without crashing', () => {
    shallow(<Select {...props}/>);
  });

  it('renders the <FormGroup /> component', () => {
    const wrapper = shallow(<Select {...props}/>);
    expect(wrapper.find(FormGroup)).toHaveLength(1);
  });

  it('renders the <FormControl /> component', () => {
    const wrapper = shallow(<Select {...props}/>);
    expect(wrapper.find(FormControl)).toHaveLength(1);
  });
});
