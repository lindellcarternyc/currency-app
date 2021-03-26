import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducer from './reducer'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger)
}

export const initStore = () => {
  return createStore(reducer, applyMiddleware(...middleware))
}

