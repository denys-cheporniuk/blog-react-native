import createDataContext from "./createDataContext";

const ACTIONS = {
  ADD_POST: 'ADD_POST',
  DELETE_POST: 'DELETE_POST',
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

    default:
      return state;
  }
}

const addPost = (dispatch) => (post) => (
  dispatch({ type: ACTIONS.ADD_POST, payload: post })
)

const deletePost = (dispatch) => (postId) => (
  dispatch({ type: ACTIONS.DELETE_POST, payload: postId })
)

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addPost, deletePost },
  [],
)
