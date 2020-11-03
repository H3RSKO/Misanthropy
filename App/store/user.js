import axios from 'axios'


// ACTION TYPE
const GET_ALL_USERS = 'GET_ALL_USERS'
const ADD_USER = 'ADD_USER'

// ACTION CREATOR
const getUsers = (users) => ({
  type: GET_ALL_USERS,
  users
})

const addUser = (user) => ({
  type: ADD_USER,
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
    console.log('made it to thunkland. User is: ', newUser)
    const {data} = await axios.post('/api/users', newUser)
    // console.log('made it to thunkland. User is: ', data)
    return dispatch(addUser(data))
  }
  catch(err) {console.log(err)}
}


// reducer
export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users
    case ADD_USER:
      return [...state, action.user]
    default:
      return state
  }
}
