import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Burger from './Burger'

describe('<Burger>', () => {
  it('renders the same output', () => {
    const ingredients = {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    }
    const component = shallow(<Burger ingredients={ingredients} />)

    expect(component).toMatchSnapshot()
  })

  it('renders with ingredients', () => {
    const ingredients = {
      salad: 3,
      bacon: 1,
      cheese: 2,
      meat: 1,
    }
    const component = shallow(<Burger ingredients={ingredients} />)

    expect(component).toMatchSnapshot()
  })
})
