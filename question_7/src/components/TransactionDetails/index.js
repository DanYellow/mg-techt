import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom';
import moment from 'moment';


const CURRENCY_FORMATTER_INST = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'CAN' })


const TransactionDetails = (props) => {

  const renderRecipientDetails = (recipient) => {
    return Object.keys(recipient).map((key, index) => {
                if (typeof recipient[key] === 'string') {
                  return <li key={`transaction-details-${index}`}>{`${key} : ${recipient[key]}`}</li>
                } else {
                  return (<li key={`transaction-details-${index}`}>
                    <p>{key} :</p>
                    <ul>
                      { Object.keys(recipient[key]).map((subKey, index) => {
                        if (typeof recipient[key][subKey] === 'string') {
                          return (<li key={`transaction-subdetails-${index}`}>{`${subKey} : ${recipient[key][subKey]}`}</li>)
                        }
                      })}
                    </ul>
                  </li>)
                }
              });
  }

  const {name, date, business, amount, recipient, type} = props;

  let formattedAmount = null
  if (window.Intl) {
    formattedAmount = CURRENCY_FORMATTER_INST.format(amount)
  } else {
    formattedAmount = `$${amount.toFixed(2)}`
  }

  return (
    <div className="col-sm-9">
      <div className="panel panel-default">
        <div className="panel-body">
          <h1>{name}</h1>
          <h5>{business} | {formattedAmount}</h5>
          <h6 title={date}>{moment(date).format('MM/DD/YYYY')}</h6>
          <span className="badge">{type}</span>
        </div>
        <hr/>
        <div className='row'>
          <ul>
            {renderRecipientDetails(recipient)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TransactionDetails;
