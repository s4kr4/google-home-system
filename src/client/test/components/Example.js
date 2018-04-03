import React from 'react'
import { expect } from 'chai'
import { configure, mount } from 'enzyme'
import { spy } from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import Example from '../../src/javascripts/components/Example.js'

spy(Example.prototype, 'componentDidMount')

describe('<Example />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<Example />)
    expect(Example.prototype.componentDidMount.calledOnce).to.equal(true)
  })
})
