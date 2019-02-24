import types from '../actionTypes';

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case types.FETCH_REQUEST_POSTS:
    case types.FETCH_REQUEST_POST:
      return true;

    case types.FETCH_SUCCESS_POSTS:
    case types.FETCH_ERROR_POSTS:
    case types.FETCH_SUCCESS_POST:
    case types.FETCH_ERROR_POST:
      return false;

    default:
      return state;
  }
};

export default loadingReducer;
