import createDataContext from "./createDataContext";

const ACTIONS = {
  ADD_POST: 'ADD_POST',
  DELETE_POST: 'DELETE_POST',
}

const blogReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_POST:
      return [...state, action.payload];

    case ACTIONS.DELETE_POST:
      return state.filter(post => post.id !== action.payload);

    default:
      return state;
  }
}

const addPost = (dispatch) => (post) => (
  dispatch({ type: ACTIONS.ADD_POST, payload: post })
)

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addPost },
  [],
)
