import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Ingredient from './Ingredient'

describe('<Ingredient>', () => {
  it('renders the same output', () => {
    const types = [
      'bread-bottom',
      'bread-top',
      'meat',
      'cheese',
      'salad',
      'bacon',
    ]
    types.forEach(type => {
      const component = shallow(<Ingredient type={type} />)
      expect(component).toMatchSnapshot()
    });
  })
})
