import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

let composition = null

/* eslint-disable no-underscore-dangle */
if (NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  composition = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
} else {
  composition = compose(applyMiddleware(thunk))
}
/* eslint-enable */

const store = createStore(
  reducers,
  composition,
);

export default store;
