import { default as app, getTransactions } from './index'

describe('App container module', () => {
  test('Initial state', () => {
    const initialState = {
      transactions: [],
    }

    const uselessFunction = {}

    expect(app(undefined, uselessFunction)).toEqual(initialState)
  })

  it('Should return transactions', () => {
    const initialState = {
      transactions: [],
    }

    expect(getTransactions().payload.transactions).toHaveLength(20);
  })

})
