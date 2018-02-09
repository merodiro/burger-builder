import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Backdrop from './Backdrop'

describe('<Backdrop>', () => {
  it('renders the same output', () => {
    const component = shallow(<Backdrop />)

    expect(component).toMatchSnapshot()
  })

  it('renders with show property', () => {
    const component = shallow(<Backdrop show="true">Hello world</Backdrop>)

    expect(component).toMatchSnapshot()
  })
})
