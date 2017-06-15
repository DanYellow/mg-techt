import ReactDOM from 'react-dom'
import React from 'react'
import { shallow } from 'enzyme'

import Transactions from './index'

describe('Transactions component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Transactions transactions={[]} />, div)
  })
})
