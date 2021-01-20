import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'

import users from './user'
import threads from './threads'

const reducer = combineReducers({
  users,
  threads
})

const store = createStore(reducer, applyMiddleware(ReduxThunk, logger))

export default store
export * from './user'
export * from './threads'
