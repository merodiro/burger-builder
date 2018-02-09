import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import BuildControls from './BuildControls'

describe('<BuildControls>', () => {
  it('renders the same output', () => {
    let disabled = {
      bacon: true,
      salad: false,
      meat: true,
      cheese: true
    }
    const component = shallow(
      <BuildControls price={4} disabled={{ bacon: true }} />
    )
    expect(component).toMatchSnapshot()
  })
})
