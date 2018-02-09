import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import OrderSummary from './OrderSummary'

describe('<OrderSummary>', () => {
  it('renders the same output', () => {
    const ingredients = {
      salad: 2,
      bacon: 1,
      cheese: 1,
      meat: 2,
    }
    const component = shallow(<OrderSummary ingredients={ingredients} />)
    expect(component).toMatchSnapshot()
  })
})
