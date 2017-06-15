import React from 'react'
import {
  Link
} from 'react-router-dom';

const Transactions = (props) => {
  return (
    <div className='list-group'>
      {props.transactions.map(transaction => (
        <Link to={`/${transaction.account}`} className='list-group-item' key={transaction.uuid}>{transaction.account}</Link>
      ))}
    </div>
  )
}

export default Transactions;
