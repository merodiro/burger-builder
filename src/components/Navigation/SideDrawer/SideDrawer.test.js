import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import SideDrawer from './SideDrawer'

describe('<SideDrawer>', () => {
  it('renders the same output', () => {
    const component = shallow(<SideDrawer />)
    expect(component).toMatchSnapshot()
  })
})
