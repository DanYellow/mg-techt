import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route } from 'react-router-dom'
import { find } from 'lodash'

import Transactions from 'components/Transactions'
import TransactionDetails from 'components/TransactionDetails'

import { getTransactions } from './modules'

class App extends Component {
  componentDidMount() {
    this.props.actions.getTransactions()
  }

  render() {
    const { transactions, match } = this.props;
    return (
        <div className='App'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='page-header'>
                            <h1>Transactions</h1>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Transactions transactions={transactions} />
                    </div>

                    <Route
                        path={`${match.url}:id_transactions`}
                        render={(props) => {
                            const subMatch = props.match;
                            const currentTransaction = find(transactions, { account: String(subMatch.params.id_transactions) })
                            if (!currentTransaction) {
                                return (
                                    <div className='col-sm-9'>
                                        <div className='alert alert-danger' role='alert'>Transaction not found</div>
                                    </div>
                                )
                            }

                            return (
                                <TransactionDetails {...currentTransaction} />
                            )
                    }}
                    />
                </div>
            </div>
        </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    transactions: state.transactions.transactions
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getTransactions }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
