import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'

import users from './user'

// const reducer = combineReducers({
//   users,
// })

const store = createStore(users, applyMiddleware(ReduxThunk, logger))

export default store
export * from './user'
