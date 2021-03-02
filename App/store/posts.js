import axios from 'axios'

// ACTION TYPE
const GET_ALL_POSTS = 'GET_ALL_POSTS' // ALL POSTS IN A SPECIFIC THREAD
const CREATE_POST = 'CREATE_POST'

// ACTION CREATORS
const getAllPosts = (posts) => ({
  type: GET_ALL_POSTS,
  posts
})

const createPost = (post) => ({
  type: CREATE_POST,
  post
})

// Thunks
export const fetchPosts = () => async (dispatch) => {
  try {
    // need to do
    const { data } = axios.get('/api/posts/:thread')

  } catch(err) {console.log(err)}
}
