import types from '../actionTypes';

const postsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_SUCCESS_POSTS:
      return payload.data;
    case types.FETCH_SUCCESS_DELETE_POST:
      return state.filter(post => post.id !== payload.id);
    default:
      return state;
  }
};

export default postsReducer;
