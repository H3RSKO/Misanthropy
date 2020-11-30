import axios from 'axios'

// ACTION TYPE
const GET_ALL_USERS = 'GET_ALL_USERS'
const ADD_USER = 'ADD_USER'
const GET_USER = 'GET_USER'

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
    console.log('Data >> ', data)
    return dispatch(getUser({...data, loggedIn: true}))
  } catch(authError) {
    return dispatch(getUser({error: authError}))
  }
}

// reducer
export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users
    case ADD_USER:
      return action.newUser
    case GET_USER:
      return action.user
    default:
      return state
  }
}
