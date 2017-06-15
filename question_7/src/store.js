import { createStore, applyMiddleware, compose } from 'redux'

import reducers from './reducers'

let composition = null

/* eslint-disable no-underscore-dangle */
if (NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  composition = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
}
/* eslint-enable */

const store = createStore(
  reducers,
  composition,
);

export default store;
