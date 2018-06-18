import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import SideDrawer from './DrawerToggle'

describe('<DrawerToggle>', () => {
  it('renders the same output', () => {
    const component = shallow(<SideDrawer />)
    expect(component).toMatchSnapshot()
  })
})
