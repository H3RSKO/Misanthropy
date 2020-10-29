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
    dispatch(getUsers(data))
  }
  catch(err) {console.log(err)}
}

export const addNewUser = () => async (dispatch) => {
  try {
    const {data} = await axios.post('/api/users', newUser)
    dispatch(addUser(data))
  }
  catch(err) {console.log(err)}
}


// reduce
export default function (state = [], action) {
  switch(action.type) {
    case GET_ALL_USERS:
      return action.users
    case ADD_USER:
      return [...state, action.user]
    default:
      return state
  }
}
