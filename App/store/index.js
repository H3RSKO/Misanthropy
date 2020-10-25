import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk';

import users from './user'

// const reducer = combineReducers({
//   users,
// })

const store = createStore(users, applyMiddleware(ReduxThunk))

export default store
export * from './user'
