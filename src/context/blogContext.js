import createDataContext from "./createDataContext";
import server from '../api/server';

const ACTIONS = {
  GET_POSTS: 'GET_POSTS',
  DELETE_POST: 'DELETE_POST',
  EDIT_POST: 'EDIT_POST',
}

const blogReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_POSTS:
      return [...action.payload];

    case ACTIONS.DELETE_POST:
      return state.filter(post => post.id !== action.payload);

    case ACTIONS.EDIT_POST:
      return state.map(post => (
        post.id === action.payload.id
          ? action.payload
          : post
      ))

    default:
      return state;
  }
}

const getPosts = (dispatch) => async () => {
  const response = await server.get('/blogPosts');

  console.log('getPosts');

  dispatch({ type: ACTIONS.GET_POSTS, payload: response.data })
}

const addPost = (dispatch) => async ({ title, content }, callback) => {
  await server.post('/blogPosts', { title, content });

  if (callback) {
    callback();
  }
}

const deletePost = (dispatch) => async (postId) => {
  await server.delete(`/blogPosts/${postId}`);

  dispatch({type: ACTIONS.DELETE_POST, payload: postId})
}

const editPost = (dispatch) => async ({ id, title, content }, callback) => {
  await server.put(`/blogPosts/${id}`, { title, content })

  dispatch({ type: ACTIONS.EDIT_POST, payload: { id, title, content } });

  if (callback) {
    callback();
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getPosts, addPost, deletePost, editPost },
  [],
)
