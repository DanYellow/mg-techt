import FakerManager from 'utils/FakerManager'

const FETCH_TRANSACTIONS = 'question_7/app/FETCH_TRANSACTIONS'

const initialState = {
  transactions: [],
}

// --- Reducer
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS: {
      return {...state, ...{transactions: action.payload.transactions}}
    }

    default:
      return state
  }
}

export default appReducer

// --- Actions
export const getTransactions = () => ({
  type: FETCH_TRANSACTIONS,
  payload: { 
    transactions: FakerManager.getTransactions()
  },
});
