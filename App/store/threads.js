import axios from 'axios'

// ACTION TYPE
const GET_ALL_THREADS = 'GET_ALL_THREADS'
const ADD_THREAD = 'ADD_THREAD'

// ACTION CREATORS
const getThreads = (threads) => ({
  type: GET_ALL_THREADS,
  threads
})

const addThread = (thread) => ({
  type: ADD_THREAD,
  thread
})

// Thunks
export const fetchThreads = () => async (dispatch) => {
  try {
    const {data} = await axios.get('/api/threads')
    console.log(`the threads data is ${data}`)
    return dispatch(getThreads(data))
  } catch(err) {console.log(err)}
}

// when posting new thread, need to split off initial text post as first post in thread
export const createThreads = (thread) => async (dispatch) => {
  try {
    console.log(`we are in the thunk`)
    const {data} = await axios.post('/api/threads', thread)
    console.log(`the new thread is ${data}`)
    return dispatch(addThread(data))
  } catch(err) {console.log(err)}
}

// reducer
export default function (state = {threads: []}, action) {
  switch (action.type) {
    case GET_ALL_THREADS:
      return {...state, threads: action.threads}
    case ADD_THREAD:
      return {...state, threads: action.thread}
    default:
      return state
  }
}
