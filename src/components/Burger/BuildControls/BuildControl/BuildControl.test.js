import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import BuildControl from './BuildControl'

describe('<BuildControl>', () => {
  it('renders the same output', () => {
    const component = shallow(<BuildControl label="Bacon" disabled />)
    expect(component).toMatchSnapshot()
  })
})
