import types from '../actionTypes';

const postsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_SUCCESS_POST:
      return payload.data;
    default:
      return state;
  }
};

export default postsReducer;
