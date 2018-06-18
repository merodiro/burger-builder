import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import NavigationItems from './NavigationItems'

describe('<NavigationItems>', () => {
  it('renders the same output', () => {
    const component = shallow(<NavigationItems />)
    expect(component).toMatchSnapshot()
  })
})
