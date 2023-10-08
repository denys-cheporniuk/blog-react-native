import createDataContext from "./createDataContext";

const ACTIONS = {
  ADD_POST: 'ADD_POST',
  DELETE_POST: 'DELETE_POST',
  EDIT_POST: 'EDIT_POST',
}

const blogReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_POST:
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          ...action.payload,
        }];

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

const addPost = (dispatch) => (post, callback) => {
  dispatch({type: ACTIONS.ADD_POST, payload: post});

  if (callback) {
    callback();
  }
}

const deletePost = (dispatch) => (postId) => (
  dispatch({ type: ACTIONS.DELETE_POST, payload: postId })
)

const editPost = (dispatch) => (post, callback) => {
  dispatch({ type: ACTIONS.EDIT_POST, payload: post });

  if (callback) {
    callback();
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addPost, deletePost, editPost },
  [],
)
