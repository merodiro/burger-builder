import React from 'react'
import { shallow } from 'enzyme'

import Layout from './Layout'

describe('<Layout>', () => {
  it('renders the same output', () => {
    const component = shallow(<Layout />)

    expect(component).toMatchSnapshot()
  })

  it('renders with children', () => {
    const component = shallow(<Layout>Hello world</Layout>)

    expect(component).toMatchSnapshot()
  })
})
