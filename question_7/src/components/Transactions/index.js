import React from 'react'
import {
  NavLink
} from 'react-router-dom';

const Transactions = (props) => {
  return (
    <div className='list-group'>
      {props.transactions.map(transaction => (
        <NavLink to={`/${transaction.account}`} activeClassName='active' className='list-group-item' key={transaction.uuid}>{transaction.account}</NavLink>
      ))}
    </div>
  )
}

export default Transactions;
