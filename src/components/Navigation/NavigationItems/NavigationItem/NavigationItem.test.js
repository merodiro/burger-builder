import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import NavigationItem from './NavigationItem'

describe('<NavigationItem>', () => {
  it('renders the same output', () => {
    const component = shallow(
      <NavigationItem link="/" active>
        A link
      </NavigationItem>
    )
    expect(component).toMatchSnapshot()
  })
})
