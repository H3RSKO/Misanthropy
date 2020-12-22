import axios from 'axios'

// ACTION TYPE
const GET_ALL_USERS = 'GET_ALL_USERS'
const ADD_USER = 'ADD_USER'
const GET_USER = 'GET_USER'
const GET_ERROR = 'GET_ERROR'

// ACTION CREATOR
const getUsers = (users) => ({
  type: GET_ALL_USERS,
  users
})

const addUser = (newUser) => ({
  type: ADD_USER,
  newUser
})

const getUser = (user) => ({
  type: GET_USER,
  user
})

const getError = (error) => ({
  type: GET_ERROR,
  error
})

// THUNK
export const fetchUsers = () => async (dispatch) => {
  try{
    const {data} = await axios.get('/api/users')
    return dispatch(getUsers(data))
  }
  catch(err) {console.log(err)}
}

export const addNewUser = (newUser) => async (dispatch) => {
  try {
    const {data} = await axios.post('/api/users/signup', newUser)
    return dispatch(addUser({...data, loggedIn: true}))
  }
  catch(err) {console.log(err)}
}

export const authenticateUser = (user) => async (dispatch) => {
  try {
    const {data} = await axios.post('/api/users/login', user)
    console.log('In thunk, user returned from API >> ', data)

    return dispatch(getUser({...data, loggedIn: true}))
  } catch(authError) {
    console.log('autherror>> ', authError)
    return dispatch(getError({error: authError}))
  }
}

// reducer
export default function (state = {user: {loggedIn: false}}, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users
    case ADD_USER:
      return {...state, user: action.newUser}
    case GET_USER:
      return {...state, user: action.user}
    case GET_ERROR:
      return {...state, error: action.error}
    default:
      return state
  }
}
