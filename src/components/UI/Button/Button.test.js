import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Button from './Button'

describe('<Button>', () => {
  it('renders the same output', () => {
    const component = shallow(<Button type="Success">Click me</Button>)

    expect(component).toMatchSnapshot()
  })

  it('renders the Danger type', () => {
    const component = shallow(<Button type="Danger">Cancel</Button>)

    expect(component).toMatchSnapshot()
  })
})
