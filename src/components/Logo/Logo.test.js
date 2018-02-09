import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Logo from './Logo'

describe('<Logo>', () => {
  it('renders the same output', () => {
    const component = shallow(<Logo />)
    expect(component).toMatchSnapshot()
  })
})
