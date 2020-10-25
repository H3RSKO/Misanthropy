import axios from 'axios'


// ACTION TYPE
const GET_ALL_USERS = 'GET_ALL_USERS'


// ACTION CREATOR
const getUsers = (users) => ({
  type: GET_ALL_USERS,
  users
})

// THUNK
export const fetchUsers = () => async (dispatch) => {
  try{
    const {data} = await axios.get('/api/users')
    dispatch(getUsers(data))
  }
  catch(err) {console.log(err)}
}


// reduce
export default function (state = [], action) {
  switch(action.type) {
    case GET_ALL_USERS:
      return action.users
    default:
      return state
  }
}
