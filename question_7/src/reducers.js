import { combineReducers } from 'redux';

import transactionsReducer from 'containers/App/modules';

const reducers = combineReducers({
  transactions: transactionsReducer,
});

export default reducers
