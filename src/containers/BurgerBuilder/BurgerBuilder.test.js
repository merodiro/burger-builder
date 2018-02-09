import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import BurgerBuilder from './BurgerBuilder'

describe('<BurgerBuilder>', () => {
  it('renders the same output', () => {
    const component = shallow(<BurgerBuilder />)

    expect(component).toMatchSnapshot()
  })

  it('renders with ingredents', () => {
    const component = shallow(<BurgerBuilder />)
    component.setState({
      ingredients: {
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 1,
      },
    })
    expect(component).toMatchSnapshot()
  })
})
