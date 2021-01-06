import axios from 'axios'

// ACTION TYPE
const GET_ALL_USERS = 'GET_ALL_USERS'
const ADD_USER = 'ADD_USER'
const GET_USER = 'GET_USER'
const GET_COOKIE_USER = 'GET_COOOKIE_USER'
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

const getCookieUser = (cookieUser) => ({
  type: GET_COOKIE_USER,
  cookieUser
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

// check if user has cookie
export const checkUserCookie = (cookie) => async (dispatch) => {
  console.log('checkUser is running')
  console.log(`cookie is ${cookie}`)
  try {
    const { data } = await axios.get(`/api/auth/me/${cookie}`)
    console.log(`checkUser user is: ${data}`)
    if (data) {
      return dispatch(getCookieUser({...data, loggedIn: true}))
    } else {
      console.log('no cookie?')
      return
    }
  } catch(authError) {
    console.log('autherror>> ', authError)
    return dispatch(getError({error: authError}))
  }
}

// login user after runnig cookie through main index.js
export const loginUserFromCookie = (user) => async (dispatch) => {
  try {
    console.log(`in thunk the user is ${user}`)
    return dispatch(getUser({...user, loggedIn: true}))
  } catch(err) {return dispatch(getError({error: err}))}
}

// reducer
export default function (state = {user: {loggedIn: false}}, action) {
  // console.log(`The action is ${action.type}`)
  switch (action.type) {
    case GET_ALL_USERS:
      return {...state, allUsers: action.users}
    case ADD_USER:
      return {...state, user: action.newUser}
    case GET_USER:
      return {...state, user: action.user}
    case GET_COOKIE_USER:
      return {...state, user: action.cookieUser}
    case GET_ERROR:
      return {...state, error: action.error}
    default:
      return state
  }
}
