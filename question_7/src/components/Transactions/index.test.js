import ReactDOM from 'react-dom'
import React from 'react'
import { mount, shallow } from 'enzyme'

import {
  NavLink
} from 'react-router-dom'

import Transactions from './index'

describe('Transactions component', () => {
  const mockedDatas = [{ amount: '99.00',
        date: '2012-02-01T23:00:00.000Z',
        business: 'Greenfelder - Heidenreich',
        name: 'Auto Loan Account 1164',
        type: 'payment',
        account: '84837948',
        uuid: '7f7af559-022e-442b-b33f-017f3b20d3ec' },
      { amount: '11.00',
        date: '2012-02-01T23:00:00.000Z',
        business: 'Hammes - Schumm',
        name: 'Personal Loan Account 4911',
        type: 'payment',
        account: '60156814',
        uuid: '8d529db8-4dc7-46b7-999e-0104c81a57f0' },
      { amount: '765.00',
        date: '2012-02-01T23:00:00.000Z',
        business: 'Osinski - Cummings',
        name: 'Money Market Account 9573',
        type: 'invoice',
        account: '36901502',
        uuid: '8cea172b-8ce6-4ee5-9962-9629aad73e6a' }];

  it('Should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Transactions transactions={[]} />, div)
  })

  it('Should render 3 list item', () => {
    const wrapper = shallow(
      <Transactions transactions={mockDatas} />
    )

    expect(wrapper.find(NavLink)).toHaveLength(mockedDatas.length)
    
  })
})
