import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Modal from './Modal'

describe('<Modal>', () => {
  it('renders the same output', () => {
    const component = shallow(<Modal>Hello world</Modal>)

    expect(component).toMatchSnapshot()
  })

  it('renders with show property', () => {
    const component = shallow(<Modal show="true">Hello world</Modal>)

    expect(component).toMatchSnapshot()
  })
})
