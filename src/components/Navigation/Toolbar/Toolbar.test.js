import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Toolbar from './Toolbar'

describe('<Toolbar>', () => {
  it('renders the same output', () => {
    const component = shallow(<Toolbar />)
    expect(component).toMatchSnapshot()
  })
})
